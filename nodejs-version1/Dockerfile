FROM node:7.10-alpine

# Install Yarn
WORKDIR /opt
ADD https://yarnpkg.com/latest.tar.gz latest.tar.gz
RUN tar zxvf latest.tar.gz

# Setup for application
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package.json /usr/src/app
RUN yarn install

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000
CMD ["yarn", "run", "start"]
