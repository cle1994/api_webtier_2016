FROM node:7.7.2-slim

MAINTAINER Christian Le <christianle94@gmail.com>

RUN apt-get update
RUN apt-get install git -y

# Install Yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

# Copy over app
RUN mkdir -p /usr/src/app
ADD . /usr/src/app

# Set working directory for app
WORKDIR /usr/src/app

# Remove node_modules
RUN rm -rf node_modules

# Install npm packages
RUN yarn install --force
RUN npm rebuild node-sass
RUN npm run build

# Expose port 3000 for app
EXPOSE 8000

# Start node app
CMD [ "npm", "start" ]

