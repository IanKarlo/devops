FROM node:20

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

RUN npm run build

RUN rm -rf src/

CMD ["npm", "start"]

