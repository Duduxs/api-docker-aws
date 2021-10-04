FROM node:8-alpine

WORKDIR /

COPY ./app /

CMD [ "node", "markdowntohtml.js" ]

RUN echo "\n Imagem gerada com sucesso! \n"
