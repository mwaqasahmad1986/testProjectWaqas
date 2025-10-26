import {test, expect} from '@playwright/test';
import { exception } from 'console';
//import test from "../lambdatest-setup";


test('get rows and columns count', async({page}) =>{
  await page.goto("https://www.letskodeit.com/practice")

  const table = await page.locator('table#product')
  
  await table.scrollIntoViewIfNeeded()
  const rows = table.locator('tbody tr');
  
  const columns = table.locator('tr th');

  expect(await rows.count()).toEqual(4)
  expect(await columns.count()).toEqual(3)

})

test('simple alert', async({page}) =>{
  await page.goto("https://www.letskodeit.com/practice")

  const table = await page.locator('table#product')
  
  await table.scrollIntoViewIfNeeded()
  const rows = table.locator('tbody tr');
  
  const columns = table.locator('tr th');

 

})
