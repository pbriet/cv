#!/bin/bash

# npm run build -- --mode production --dest dist/production
docker-compose run --name cv_build cv npm run build -- --mode production --dest dist/production
docker cp cv_build:/cv/dist/production ./dist
docker rm cv_build