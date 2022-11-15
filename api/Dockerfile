FROM --platform=linux/x86-64 node:16

ENV PORT 1337

ENV HOST 0.0.0.0
ENV APP_KEYS "toBeModified1,toBeModified2"
ENV API_TOKEN_SALT tobemodified
ENV ADMIN_JWT_SECRET tobemodified
ENV JWT_SECRET tobemodified


# Create app directory
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/build
RUN mkdir -p /usr/src/app/src/admin
WORKDIR /usr/src/app

# Installing dependencies
COPY ./package*.json /usr/src/app/
# COPY . ./
RUN yarn
RUN yarn build

# Copying source files
COPY . /usr/src/app/

# Building app
EXPOSE 1337

# Running the app
CMD "yarn" "start"