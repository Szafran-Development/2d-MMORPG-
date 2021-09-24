FROM node:14-alpine

WORKDIR ../../frontend

COPY package*.json ./

RUN ["/bin/bash", "-c", "npm", "install"]

EXPOSE 8080

CMD ['/bin/bash', '-c', 'npm', 'run', 'serve']
