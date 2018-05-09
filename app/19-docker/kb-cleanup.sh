#!/usr/bin/env bash
set -eaux 


kubectl delete service hello-web
sleep 10
gcloud compute forwarding-rules list

# Wait that the list send back 0 items to run the following.
gcloud container clusters delete hello-cluster  --zone=europe-west4-a --async <<EOF
Y
EOF
