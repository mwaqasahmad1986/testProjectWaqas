FROM node:latest
WORKDIR /tests

# Prevent the browser from opening
ENV PW_TEST_HTML_REPORT_OPEN='never'

#Clone the run script
RUN git clone https://github.com/mwaqasahmad1986/testProjectWaqas.git /run-dir

cd /run-dir

#install test environment
npm install

#install browser dependencies
npx playwright install --with-deps

#run test with trace  on 
npx playwright test --trace on
