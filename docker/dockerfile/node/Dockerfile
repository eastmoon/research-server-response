# Base OS Use with node.js
FROM node:10

# Install Node.js
ENV NVM_VERSION=10.16.0
RUN \
  apt-get update -y && \
  apt-get install -y \
      rsync

#
EXPOSE 80/tcp
WORKDIR /repo

#
COPY docker-entrypoint.sh /
ENTRYPOINT ["/bin/bash", "/docker-entrypoint.sh"]
