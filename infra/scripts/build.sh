#!/bin/bash
# cd ../../
docker build -t iteo-2026:latest -f infra/Docker/Dockerfile .
docker tag iteo-2026:latest registry.iteo.pro/iteo-2026:latest
docker push registry.iteo.pro/iteo-2026:latest