import {test, expect} from '@playwright/test';

import loginPageClass from '../Pages/loginPage';

//import test from "../lambdatest-setup";


test('Visible/Hidden assertion', async({ page }) => {


    
   await page.goto("https://www.letskodeit.com/practice");
   await expect(page.locator('#displayed-text')).toBeVisible();
   await page.locator('#hide-textbox').click();
   await expect(page.locator('#displayed-text')).not.toBeVisible();
   await expect(page.locator('#displayed-text')).toBeHidden();
   
   await page.close();
})

test('Present/NOt-present assertion', async({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
    await expect(page.locator('.added-manually')).not.toHaveCount(1);
    await page.locator('button[onclick="addElement()"]').click();
    await page.locator('button[onclick="addElement()"]').click();
    await expect(page.locator('.added-manually')).not.toHaveCount(2);
    await page.close();
 })

 test('Enabled/disabled', async({ page }) => {
    await page.goto("https://www.letcode.in/buttons");
    await expect(page.locator('#property')).toBeEnabled();
    await expect(page.locator('[title="Disabled button"]')).toBeDisabled();
    await page.close()

 })

 test('text match mismathc assertion', async({ page }) => {
    await page.goto("https://www.letcode.in/buttons");
    await expect(page.locator('[id="color"]')).toHaveText('what is my color');
    await expect(page.locator('[id="color"]')).not.toHaveText('abcd');
    await page.close()


 })

 test('attribute assertion', async({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com");
    await expect(page.locator('input[placeholder="Username"]')).toHaveAttribute('name','username');
    await expect(page.locator('input[placeholder="Username"]')).toHaveAttribute('abcd', 'username');
    await page.close()


 })
 test('URL  assertion', async({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com");
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    await expect(page).toHaveURL(/demo.orangehrmlive/);
    await page.close()


 })

 test('Title  assertion', async({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com");
    await expect(page).toHaveTitle('OrangeHRM')
    
    await expect(page).toHaveTitle(/.*HRM/)
    
    await page.close()


 })

 test('Screenshot  assertion', async({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com");
    
    await expect(page).toHaveScreenshot();


    await page.close()


 })