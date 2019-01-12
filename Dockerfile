FROM ubuntu:18.04

ENV PORT 80
ENV SERVER_ONLY true
ENV NODE_ENV production

RUN apt-get update -y && \
apt-get install curl gnupg git -y && \
curl -sL https://deb.nodesource.com/setup_8.x | bash - && \
apt-get install nodejs -y

RUN mkdir /usr/share/app
WORKDIR /usr/share/app

COPY package*.json ./
RUN npm i

COPY . .
RUN npm run build

EXPOSE 80

CMD ["npm", "run", "serve:docker"]
