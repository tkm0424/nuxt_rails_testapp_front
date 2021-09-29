FROM node:14.15.1-alpine

ARG WORKDIR
ARG CONTAINER_PORT
ARG API_URL

ENV HOME=/${WORKDIR} \
    LANG=C.UTF-8 \
    TZ=Asia/Tokyo \
    #これを指定しないとブラウザからhttp://localhost へアクセスすることができない。    
    #RailsのDockerfileで指定した、CMD ["rails", "server", "-b", "0.0.0.0"]と同じ意味を持つ。
    HOST=0.0.0.0 \
    API_URL=${API_URL}

RUN echo ${HOME}
RUN echo ${CONTAINER_PORT}
RUN echo ${API_URL}

WORKDIR ${HOME}


EXPOSE ${CONTAINER_PORT}