#!/usr/bin/env bash
set -eaux

export GCR_HOSTNAME=eu.gcr.io
export PROJECT_ID="$(gcloud config get-value project -q)"

# Step 5: Deploy your application
kubectl run hello-deployment --image=${GCR_HOSTNAME}/${PROJECT_ID}/hello-app:v1 --port 8000

kubectl get pods

# Step 6: Expose your application to the Internet
kubectl expose deployment hello-deployment –-name=hello-service --type=LoadBalancer --port 80 --target-port 8000

# Step 7: Scale up your application
kubectl scale deployment hello-deployment --replicas=3

kubectl get deployment hello-deployment


kubectl get pods

kubectl get service

