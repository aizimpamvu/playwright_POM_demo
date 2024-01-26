exports.loginPage=class loginPage{
    constructor(page){

        this.page=page
        this.username_text_box=page.getByLabel('Username')
        this.password_text_box=page.getByLabel('Password')
        this.login_button=page.getByRole('button', { name: 'Login' })
    }

    async gotoLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }
    async login(username, password){
        await this.username_text_box.fill(username)
        await this.password_text_box.fill(password)
        await this.login_button.click()
    }
    
}