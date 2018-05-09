#!/usr/bin/env bash
set -eaux

GCR_HOSTNAME=eu.gcr.io
PROJECT_ID="$(gcloud config get-value project -q)"
ZONE="$(gcloud config get-value compute/zone -q)"

test ${ZONE}


# Step 1: Build the container image
docker build -t ${GCR_HOSTNAME}/${PROJECT_ID}/hello-app:v1 .
docker images

# Step 2: Upload the container image to the Google Content Registry.
# https://console.cloud.google.com/gcr/
gcloud docker -- push ${GCR_HOSTNAME}/${PROJECT_ID}/hello-app:v1

# Step 3: Create a container cluster
gcloud container clusters create hello-cluster --num-nodes=3 --zone=${ZONE}
gcloud compute instances list
