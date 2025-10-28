#Clone the run script
RUN git clone https://github.com/mwaqasahmad1986/testProjectWaqas.git /run-dir

cd /run-dir

#install test environment
npm install

#install browser dependencies
npx playwright install --with-deps

#run test with trace  on 
npx playwright test --trace on