FROM node:20

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

ENV NODE_ENV=Production

RUN npm run build

RUN rm -rf src/

CMD ["npm", "start"]

