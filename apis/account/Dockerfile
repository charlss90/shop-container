# Autor: Edu Pazmino
FROM node:8.7

MAINTAINER Edu Pazmino

RUN npm i -g nodemon && mkdir -p /src

# Define working directory
WORKDIR /src
ADD . /src
RUN cd /src && npm i

# Set environments
ENV PORT 3001

# Expose port
# EXPOSE 3001:3001

# Run app using nodemon
CMD ["nodemon", "/src/apis/account/index.js"]

