//const loginPage = require('./login.page')

class ResendEmailPage {

    get inputEmail () {return $('[name="email"]')}
    get submitBtn () {return $('.Button__StyledDefaultButton-bvSDhd')}
    get message () {return $('.Text-dgspRF > div')}
    get haveAccounBtn () {return $('[href="/#/login/sign-in"]')}
    get needSignUpBtn () {return $('[href="https://telnyx.com/sign-up"]')}

    async fillEmail(email){
        this.inputEmail.addValue(email)
        await expect(this.inputEmail).toHaveValue(email)
    }
    async clickSubmitBtn(){
        await this.submitBtn.waitForEnabled({ timeout: 10000 })
        this.submitBtn.click()
    }
    async checkMessage (text) {
        await expect(this.message).toBeDisplayed()
        await expect(this.message).toHaveText(text)
    }
    async clickHaveAccountBtn () {
        await this.haveAccounBtn.waitForExist({ timeout: 10000 })
        this.haveAccounBtn.click()
        setTimeout(async function () {
            await browser.toHaveUrlContaining('/login')
          }, 5000);
        await expect(browser).toHaveUrlContaining('/login')
    }
    async clickNeedSignUpBtn () {
        await this.needSignUpBtn.waitForExist({ timeout: 10000 })
        this.needSignUpBtn.click()
        setTimeout(async function () {
            await browser.toHaveUrlContaining('/sign-up')
          }, 5000);
        await expect(browser).toHaveUrlContaining('/sign-up')
    }
}
module.exports = new ResendEmailPage()

