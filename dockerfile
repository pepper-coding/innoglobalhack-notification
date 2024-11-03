FROM node:22.10.0 AS build

WORKDIR /app

COPY ./package-lock.json ./package-lock.json

COPY ./package.json ./package.json

RUN npm install

COPY ./src ./src

COPY ./tsconfig.json ./tsconfig.json

RUN npm run build

FROM node:22.10.0 AS image

WORKDIR /app

COPY --from=build /app/node_modules /app/node_modules

COPY --from=build /app/dist /app/dist

COPY --from=build /app/package.json /app/package.json

CMD ["npm", "run", "start:production"]