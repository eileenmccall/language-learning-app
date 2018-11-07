FROM node:9

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install

RUN npm install -g typescript

COPY . /usr/src/app

EXPOSE 3000

RUN tsc

ENTRYPOINT ["node", "dist/server.js"]