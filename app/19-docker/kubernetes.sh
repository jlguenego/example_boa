#!/usr/bin/env bash
set -eaux

# WARNING: Be sure you have a Google project activated to the billing.
# This will not charge you. It may takes a few of your credit but that is all.

# this script has to be used with "Google Cloud Shell".

# Step 1: Build the container image
export PROJECT_ID="$(gcloud config get-value project -q)"
docker build -t gcr.io/${PROJECT_ID}/hello-app:v1 .
docker images

# Step 2: Upload the container image to a google datacenter.
gcloud docker -- push gcr.io/${PROJECT_ID}/hello-app:v1 --zone=europe-west4-a

# Step 4: Create a container cluster
gcloud container clusters create hello-cluster --num-nodes=3 --zone=europe-west4-a

gcloud compute instances list

# Step 5: Deploy your application
kubectl run hello-web --image=gcr.io/${PROJECT_ID}/hello-app:v1 --port 8000

kubectl get pods

# Step 6: Expose your application to the Internet
kubectl expose deployment hello-web --type=LoadBalancer --port 80 --target-port 8000

# Step 7: Scale up your application
kubectl scale deployment hello-web --replicas=3

kubectl get deployment hello-web


kubectl get pods

