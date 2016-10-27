#!bin/bash

# Pushes the components, html pages, and bundle.js to AWS S3 where the application is hosted
# Makes all files public

git pull
aws s3 sync ./ s3://arose-music-app --acl public-read --delete --exclude ".git*" --exclude "node_modules*" --profile arose