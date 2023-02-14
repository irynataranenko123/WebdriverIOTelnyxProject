FROM webdriverio/selenium-standalone:latest
WORKDIR /WebdriverIOTelnyxProject
ADD . /WebdriverIOTelnyxProject

RUN npm install 

CMD npm run wdio
