### Docker Image for Build
FROM node:10.15.0-alpine as build

RUN mkdir -p /app
WORKDIR /app

COPY . ./
RUN yarn && yarn cache clean && yarn build


### Docker Image for Production Run
FROM keymetrics/pm2:10-alpine

RUN mkdir -p /app
WORKDIR /app

ENV NODE_ENV=production

COPY package.json yarn.lock ecosystem.config.js ./
COPY --from=build /app/dist ./dist

RUN yarn && yarn cache clean

ENTRYPOINT ["pm2-runtime", "start", "ecosystem.config.js"]

