import { Locator, Page, expect } from "@playwright/test"
import { Constants } from "./loginPageConstants"


export default class loginPageClass{

    readonly page: Page;
    readonly username: Locator;

    constructor(page:Page){
        this.page = page;
        this.username = page.locator(Constants.username);
    }
    

    async enterUsername(uname : string){
        await this.username.fill(uname);
    }


}