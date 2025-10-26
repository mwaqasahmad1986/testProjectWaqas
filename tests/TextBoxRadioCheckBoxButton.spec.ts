import {test, expect} from '@playwright/test';
//import test from "../lambdatest-setup";


test('Radio button', async({page}) =>{
  await page.goto("https://www.letskodeit.com/practice")

  const radiobutton = await page.locator('#bmwradio');
  await expect(await radiobutton.isChecked()).toBeFalsy()

  await expect(await page.locator('#bmwradio')).not.toBeChecked()

  await radiobutton.check()
  


})

test('Checkbox button', async({page}) =>{
   await page.goto("https://www.letskodeit.com/practice")
 
   const radiobutton = await page.locator('#benzcheck');
   await expect(await radiobutton.isChecked()).toBeFalsy()
 
   await expect(await page.locator('#benzcheck')).not.toBeChecked()
 
   await radiobutton.check()
   await page.pause()
 })