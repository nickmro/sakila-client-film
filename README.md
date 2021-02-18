# Sakila Film Client
[![Build Status](https://travis-ci.com/nickmro/sakila-client-film.svg?branch=master)](https://travis-ci.com/nickmro/sakila-client-film)

## Introduction

The Sakila Film Client is a web app for film data from the [Sakila Sample Database](https://dev.mysql.com/doc/sakila/en/).

This project has been built as an example of how to build a frontend microservice around a given database.

## Features

- Film details page

## Installation

Install and run the film service: https://github.com/nickmro/sakila-service-film

Install dependencies:
```bash
npm install
```

Create `.env` file:
```bash
cp .env.template .env.local
```

Fill `.env` with the applicable environment variables.

## Run

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Environment Variables
#### Runtime
| name                   | description                                     | type    | optional | default      |
|------------------------|-------------------------------------------------|---------|----------|--------------|
| HOME_PAGE_URL          | The homepage URL                                | string  | no       |              |
| FILM_SERVICE_URL       | The film service URL                            | string  | no       |              |

## Test

```
npm test
```

Update snapshots:
```
npm test -- -u
```

## Todo

- Docker
- SEO optimizations
