FROM node:8-alpine

RUN mkdir /usr/share/app
COPY . /usr/share/app
WORKDIR /usr/share/app

RUN apk --no-cache update && \
  apk --no-cache add git nginx g++ make bash zlib-dev libpng-dev && \
  mkdir -p /run/nginx

# Copy nginx config
# COPY config/default.conf /etc/nginx/conf.d/default.conf
# RUN nginx -g "daemon on;"

RUN npm i -g pm2 yarn && \
  yarn

CMD ["npm", "run", "start"]

EXPOSE 80
