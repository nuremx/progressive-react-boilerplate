FROM node:10-alpine

ENV NODE_ENV production

RUN mkdir /usr/share/app
COPY . /usr/share/app
WORKDIR /usr/share/app

RUN yarn global add pm2 sharp && \
    yarn install

CMD ["yarn", "start:docker"]

EXPOSE 8080
