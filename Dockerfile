FROM node:8

RUN mkdir /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm i -g yarn
RUN yarn global add pm2
RUN yarn

CMD ["yarn", "start"]

EXPOSE 8080
