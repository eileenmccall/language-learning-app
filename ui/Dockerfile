FROM node:9

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./ui/package.json /usr/src/app

RUN npm install -g @angular/cli@6.1.4
RUN npm install

COPY ./ui/angular.json /usr/src/app
COPY ./ui/tsconfig.json /usr/src/app
COPY ./ui/tslint.json /usr/src/app

EXPOSE 4200

CMD ["npm", "start"]