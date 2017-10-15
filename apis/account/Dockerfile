# Autor: Edu Pazmino
FROM ubuntu

MAINTAINER Edu Pazmino

RUN apt-get update
RUN apt-get install nodejs npm nodejs-legacy -y

RUN npm i -g nodemon

ADD ./package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /src && cp -a /tmp/node_modules /src/

# Define working directory
WORKDIR /src
ADD . /src

# Set environments
ENV PORT 3001

# Expose port
# EXPOSE 3001:3001

# Run app using nodemon
CMD ["nodemon", "/src/apis/account/index.js"]

