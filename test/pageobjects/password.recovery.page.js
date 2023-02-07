//const loginPage = require('./login.page')

class PasswordRecoveryPage{

    get inputEmail () {return $('[name="email"]')};
    get resetPasswordBtn () {return $('[type="submit"]')};
    get loginBtn () {return $('[href="/#/login/sign-in"]')}

    async fillEmail(email) {
        this.inputEmail.addValue(email)
        await expect(this.inputEmail).toHaveValue(email)
    }
    async clickResetPAsswordBtn(){
        await this.resetPasswordBtn.waitForEnabled({ timeout: 7000 })
        await this.resetPasswordBtn.click()
        await expect(this.loginBtn).toBeDisplayed()
    }
    async clickLoginBtn () {
        this.loginBtn.click()
        setTimeout(async function () {
            await browser.toHaveUrlContaining('/login')
        }, 5000);
        await expect(browser).toHaveUrlContaining('/login')
    }
    async checkBlockedResetPasswordBtn() {
        await expect(this.resetPasswordBtn).toHaveAttr('disabled')
    }
    async checkNotBlockedResetPasswordBtn() {
        await expect(this.resetPasswordBtn).not.toHaveAttr('disabled')
    }
}

module.exports = new PasswordRecoveryPage()

