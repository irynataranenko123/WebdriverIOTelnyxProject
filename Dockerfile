FROM webdriverio/selenium-standalone:latest
WORKDIR /Project_6
ADD . /Project_6

RUN npm install 

CMD npm run wdio
