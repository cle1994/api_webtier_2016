FROM node:6.6.0-slim

MAINTAINER Christian Le <christianle94@gmail.com>

RUN apt-get update
RUN apt-get install git -y

# Copy over app
RUN mkdir -p /usr/src/app
ADD . /usr/src/app

# Set working directory for app
WORKDIR /usr/src/app

# Remove node_modules
RUN rm -rf node_modules

# Install npm packages
RUN npm install
RUN npm install -g better-npm-run
RUN npm rebuild node-sass
RUN npm run build

# Expose port 3000 for app
EXPOSE 3001

# Start node app
CMD [ "npm", "start" ]

