# Provectus Algae POC

## Instructions to Install/Run the app localy

- Make sure that you have node and npm installed on your machine, preferable via nvm
- Run `npm i` to install project dependencies
- Run `npm start` to load the app in the browser

## Observations

- The app is deployed and can be accessed from here: <http://provectus.s3-website-ap-southeast-2.amazonaws.com>
- The app is hosted on a AWS S3 bucket on my personal AWS account
- The app codebase is hosted in github: <https://github.com/wendelcosta/provectus-algae>
- I'm using Terraform to provison all the reqired AWS services (S3 and API Gateway)
- The app is consuming mock data from the mocked API endpoint
- I'm using github actions for CI/CD deployment pipeline
