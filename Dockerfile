FROM node:14.15.1-alpine

ARG WORKDIR
ARG CONTAINER_PORT

ENV HOME=/${WORKDIR} \
    LANG=C.UTF-8 \
    TZ=Asia/Tokyo \
    #これを指定しないとブラウザからhttp://localhost へアクセスすることができない。    
    #RailsのDockerfileで指定した、CMD ["rails", "server", "-b", "0.0.0.0"]と同じ意味を持つ。
    HOST=0.0.0.0

WORKDIR ${HOME}

#公開用ポートを指定
#http://localhost(0.0.0.0):3000
#EXPOSE ${CONTAINER_PORT}