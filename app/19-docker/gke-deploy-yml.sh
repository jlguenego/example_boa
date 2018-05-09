#!/usr/bin/env bash
set -eaux

kubectl create -f yml/deployment.yml
kubectl create -f yml/service.yml
