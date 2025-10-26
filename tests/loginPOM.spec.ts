import {test, expect} from '@playwright/test';

import loginPageClass from '../Pages/loginPage';

//import test from "../lambdatest-setup";


const URL = "https://www.letskodeit.com/practice"

let page;
let loginPageObj: loginPageClass;

test.beforeAll( async ({ browser }) => {
   page = await browser.newPage();
   await page.goto(URL);




})




