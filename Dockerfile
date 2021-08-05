# base image
FROM node:16.6.1-alpine3.13

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install
COPY . /app
RUN npm install
RUN npm install -g @angular/cli@7.3.9


# start app
CMD ng serve --host 0.0.0.0
