import {test, expect} from '@playwright/test';
import { exception } from 'console';
//import test from "../lambdatest-setup";


// test('iframe page.Framelocator', async({page}) =>{
//   await page.goto("https://www.letskodeit.com/practice")

//   const iframe = page.frameLocator('#courses-iframe');

//   await iframe.locator('//a[@href="/home"]').click()
//   await page.pause()


// })


test('iframe page.frame', async({page}) =>{
  await page.goto("https://www.letskodeit.com/practice")

  const iframe = page.frame({url:'https://www.letskodeit.com/courses'});

  await iframe.locator('//a[@href="/home"]').click()
  await page.pause()


})

