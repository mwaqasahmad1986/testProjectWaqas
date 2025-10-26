import {test, expect} from '@playwright/test';
import { exception } from 'console';
//import test from "../lambdatest-setup";


test('simple alert', async({page}) =>{
  await page.goto("https://www.letskodeit.com/practice")

  
  page.on('dialog', async(alert) =>{ 
    const alertMsg = alert.message()
    expect(alertMsg).toEqual('Hellllo , share this practice page and share your knowledge')

    await alert.accept()

  })

  await page.locator('#alertbtn').click()


})


test('confirm alert', async({page}) =>{
  await page.goto("https://www.letskodeit.com/practice")

  
  page.on('dialog', async(alert) =>{ 
    const alertMsg = alert.message()
    expect(alertMsg).toEqual('Hellllo , share this practice page and share your knowledge')

    await alert.accept()

  })

  await page.locator('#alertbtn').click()


})