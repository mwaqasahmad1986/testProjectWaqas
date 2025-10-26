import {test, expect} from '@playwright/test';
//import test from "../lambdatest-setup";


test('Single static dropdown', async({page}) =>{
  await page.goto("https://www.letskodeit.com/practice")

  await page.selectOption('#carselect','Benz');
  await expect(page.locator('#carselect')).toHaveValue('benz')

  await page.selectOption('#carselect', {label: 'Honda'});
  await expect(page.locator('#carselect')).toHaveValue('honda')

  await page.selectOption('#carselect', {index: 0});
  await expect(page.locator('#carselect')).toHaveValue('bmw')


})

test('multi static dropdown', async({page}) =>{
  await page.goto("https://www.letskodeit.com/practice")

  await page.selectOption('#carselect',['Benz','BMW']);
  await expect(page.locator('#carselect')).toHaveValue('benz')


})

test('dynamic searchable  dropdown', async({page}) =>{
  await page.goto("https://www.letskodeit.com/practice")

  await page.selectOption('#carselect',['Benz','BMW']);
  await expect(page.locator('#carselect')).toHaveValue('benz')


})