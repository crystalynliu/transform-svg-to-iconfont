#!/bin/bash

echo "1. first delete fontLibrary.zip"

rm -rf dist/fontLibrary.zip

echo "2. Starting build new fontLib with new font folder and css file!"

mkdir fontLibrary
cp -R dist/font fontLibrary/
cp dist/iconfont.css fontLibrary/
cp dist/index.html fontLibrary/

echo "3. Starting zip fontLib to fontLib.zip. Please input password '1' and send to your huawei email!"

zip -e -r dist/fontLibrary.zip fontLibrary

rm -rf fontLibrary

echo "4. finished! Find fontLibrary.zip in folder dist"