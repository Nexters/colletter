#!/bin/bash

echo ${DOCKER_PASSWORD} | docker login --username ${DOCKER_USERNAME} --password-stdin
docker build -t colletter:latest --build-arg JAR_FILE=build/libs/*.jar .
docker tag colletter:latest ${DOCKER_USERNAME}/colletter:latest
docker push ${DOCKER_USERNAME}/colletter:latest