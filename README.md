# Click App

# Prerequisites

To build and run this app locally you will need a few things:

- Install [Node.js](https://nodejs.org/en/)

# Getting started

- Clone the repository

```
git clone https://github.com/abhimanyuPatil/mmc-api.git
```

- Install dependencies

```
cd <project_name>
npm install
```

- Build and run the project

```
ionic serve
```

if the this doesn't work update the serve and build script in package.json as below:
```
{
  "name": "click",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "ionic:serve": "vue-cli-service serve",
    "ionic:build": "vue-cli-service build",
    "test:unit": "vue-cli-service test:unit",
    "test:e2e": "vue-cli-service test:e2e",
    "lint": "vue-cli-service lint"
  },
  .....
```

Finally, navigate to `http://localhost:8080/` and you should see the app running!
