#!/bin/bash
imageName="myanees/gatlingtest"
timestamp=$(date +%s)
tagVal=v$timestamp
imagever=$imageName:v$timestamp

DLOGIN=${dlogin}
DPASS=${dpass}
docker login --username $DLOGIN --password $DPASS
docker build -t $imagever .
docker run $imagever
docker push $imagever
