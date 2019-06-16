#!/bin/bash
imageName="myanees/testla"
timestamp=$(date +%s)
tagVal=v$timestamp
imagever=$imageName:v$timestamp

DLOGIN=${dlogin}
DPASS=${dpass}
docker login --username $DLOGIN --password $DPASS
