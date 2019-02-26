FROM mhart/alpine-node:11.10.1
ARG PORT
ENV PORT ${PORT:-8080}
RUN mkdir -p /home/pokemon
ADD . /home/pokemon
WORKDIR /home/pokemon
RUN npm install
EXPOSE 80
CMD npm run start:docker