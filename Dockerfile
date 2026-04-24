FROM node:20-alpine

WORKDIR /code

COPY ./package.json /code/package.json
COPY ./package-lock.json /code/package-lock.json

RUN npm ci

COPY ./app /code/app
COPY ./server /code/server
COPY ./public /code/public
COPY ./nuxt.config.ts /code/nuxt.config.ts
COPY ./tsconfig.json /code/tsconfig.json

RUN npm run build

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
