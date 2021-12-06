#!/bin/bash

docker image build -t ce19f003/config ./config-server
docker image build -t ce19f003/registry ./discovery-server
docker image build -t ce19f003/auth ./microservice-auth
docker image build -t ce19f003/diet ./microservice-diet
docker image build -t ce19f003/exercise ./microservice-excercise
docker image build -t ce19f003/statistics ./microservice-statistics
docker image build -t ce19f003/gateway ./gateway

