#!/bin/bash

WEB_PATH=$(dirname $0)
cd $WEB_PATH
cd ..

echo "[deploy] pulling source code..."
git fetch --all && git reset --hard origin/master && git pull
git checkout master

cd ./product

echo "[deploy] Delete old files..."
rm -r ./www
mv ./bak.dist.tar.gz ./prev.bak.dist.tar.gz
echo "[deploy] Decompression tar..."
tar -xvf dist.tar.gz -C ./www
echo "[deploy] Rename tar..."
mv ./dist.tar.gz ./bak.dist.tar.gz
echo "[deploy] Finished."
