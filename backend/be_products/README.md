## Description

This is a basic product backend build from [NestJS](https://github.com/nestjs/nest) framework

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API Documentation

After running the app, the documentation should be available at `{Your host}/document`.

## Migration

To run migration please create `.env` file (follow `.env.example`).

```bash
# run migration
$ npm run migration:run

# generate migration (if there are changes to the entity)
$ npm run migration:generate
```
## Docker

```bash
$ docker buildx build -t be_products:1.0 -f Dockerfile . --load
```