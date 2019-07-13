FROM node:10

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./ui/package.json /usr/src/app

RUN npm install -f --no-optional

COPY ./ui/angular.json /usr/src/app
COPY ./ui/tsconfig.json /usr/src/app
COPY ./ui/tslint.json /usr/src/app

EXPOSE 4200

CMD ["npm", "start"]
