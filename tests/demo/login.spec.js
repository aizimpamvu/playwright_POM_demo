import {test} from '@playwright/test'
import {loginPage} from '../../pages/login'


test('Demo Login', async({page})=>{

    const Login = new loginPage(page)
    await Login.gotoLoginPage()
    await Login.login('Smith', 'Password')

//   await page.goto('https://the-internet.herokuapp.com/login')
//   await .click();
//   await page.getByLabel('Username').fill('tomsmith');
//   await .click();
//   await page.getByLabel('Password').fill('SupersecretPassword');
//   await .click();
    
})