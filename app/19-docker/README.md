# Docker a simple express server on a local machine.

# Installation

## Docker software

First you need to install Docker on Windows 10 (or Mac, or Linux).

Go to the [docker website](https://www.docker.com) and download the Free edition of docker, called the "Community Edition".

At this time, the link for Windows is [https://store.docker.com/editions/community/docker-ce-desktop-windows] (~225Mb).

Then follow carefully the installation instructions. Don't worry, it is not too complicated. Take the default options.

## Build the image

```
$ cd ./app/19-docker
$ docker build -t boa/node-web-app .
```

Docker will know what to do according the `Dockerfile` instructions.

## Check

```
$ docker images
```

You should see all the installed images on your PC.

## Run the image

```
$ docker run -p 49160:8000 -d boa/node-web-app
```

You should get some info like the <container id>.

## Check the running docker processes

```
$ docker ps
```

```
$ docker logs <container id>
```

You should see the server logs.

## Test

Open your navigator and check the url `http://localhost:49160`.

# Docker on Google Kubernetes Engine (GKE)

## Prerequisites

Create a new project with Google Cloud Platform.

Note: Needs to create an account with a credit card that will not be charged.

## Google Cloud Shell

Run a Google Cloud Shell and do:

```
$ gcloud init
```
Answer the question and specify a zone (europe, asia, etc.) of your choice.

```
$ git clone --depth 1 https://github.com/jlguenego/example_boa.git
$ cd example_boa/app/19-docker
$ bash gke-init.sh
```

The shell script `gke-init.sh` creates

- the docker image,
- the Google Container Registry necessary to store the docker image

Now we offer 2 possibilities to do the kubernetes command:

1) with the shell command: `bash gke-deploy.sh`
2) with a YAML file: `bash gke-deploy-yml.sh`





# Acknewledgement

Node documentation.

https://nodejs.org/en/docs/guides/nodejs-docker-webapp/


# Author

Jean-Louis GUENEGO jlguenego@gmail.com
