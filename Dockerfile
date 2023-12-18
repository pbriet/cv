FROM node:16-alpine as development

RUN apk --no-cache  update \
  && apk --no-cache  upgrade \
  && apk add --no-cache --virtual .build-deps \
    nginx bash \
  && rm -rf /var/cache/apk/* /tmp/*

RUN mkdir /cv /cv/deployment
WORKDIR /cv/

COPY package.json /cv/
RUN cd /cv && yarn install

COPY .* *.config.js /cv/
COPY src /cv/src
COPY public /cv/public
COPY deployment/docker-runserver.sh /cv/deployment/docker-runserver.sh

ENV NODE_PATH /cv/node_modules
ENV PATH $PATH:/cv/node_modules/.bin

EXPOSE 8080

CMD ["/bin/bash", "/cv/deployment/docker-runserver.sh"]

