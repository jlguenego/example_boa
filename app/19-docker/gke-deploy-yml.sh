#!/usr/bin/env bash
set -eaux


export GCR_HOSTNAME=eu.gcr.io
export PROJECT_ID="$(gcloud config get-value project -q)"

kubectl apply -f gke-deploy.yml
