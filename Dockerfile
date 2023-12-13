FROM node:21 AS base

RUN npm i -g pnpm

FROM base as dependencies

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .

RUN pnpm run build

CMD [ "pnpm", "run", "start:dev" ]