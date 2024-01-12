FROM node:lts
EXPOSE 8080
EXPOSE 8090
ARG PB_VERSION=0.20.5
ENV server_address = "127.0.0.1"
ENV server_port = 8090

RUN apk add --no-cache \
    unzip \
    ca-certificates

RUN apt-get -y update

ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

CMD /pb/pocketbase serve --http=0.0.0.0:8090

WORKDIR /root
COPY ./ ./

WORKDIR /root/
RUN yarn
RUN yarn build
CMD yarn start