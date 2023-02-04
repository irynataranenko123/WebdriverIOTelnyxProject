const mainPage = require('./main.page')

class LoginPage extends mainPage{

    get inputBusinessEmail () {return $('[name="email"]')};
    get inputPassword  () {return $('[name="password"]')};
    get submitBtn () {return $('.Button__StyledDefaultButton-sc-44gl5i-0')}
    get errorMessage () {return $('.Message__MessageCopy-sc-1lbs5ge-2')}
    get otherProviders () {return $('.LoginOAuth__MoreProvidersButton-kGPaCc')}
    get loginFacebook () {return $('[aria-label="facebookForm"]')}
    get loginLinkedin () {return $('[aria-label="linkedinForm"]')}
    get loginGithub () {return $('[aria-label="githubForm"]')}
    get emailFieldError () {return $('.TextField__ErrorMessage-sc-r5o2cn-5')}
    get resendBtn () {return $('[href="/#/login/resend-email"]')}
    get singleSignOn () {return $('[name="sso"]')}
    get companyEmailLabel () {return $('.Label-eJsipv')}
    get inputCompanyEmail () {return $('.TextField__InputWrapper-hGJUmT > .ui-reactv2-input')}
    get submitSSOBtn () {return $('.SSOForm__Form-gaucju > .Button__StyledDefaultButton-bvSDhd')}
    get errorMessageSSO () {return $('.Message__MessageCopy-sc-1lbs5ge-2')}
    get companyNameBtn() {return $('.SSOForm__ButtonLink-FomnK')}
    get inputBuisnessName () {return $('[name="short_name"]')}
    get forgotPasswordBtn () {return $('[href="/#/login/password-reset"]')}

    async fillEmail(email) {
        await this.inputBusinessEmail.addValue(email)
        await expect(this.inputBusinessEmail).toHaveValue(email)
    }
    async fillPassword(password) {
        await this.inputPassword.addValue(password)
        await expect(this.inputPassword).toHaveValue(password)
    }
    async clickSubmitBtn(){
        await this.submitBtn.waitForEnabled({ timeout: 7000 })
        await this.submitBtn.click()
    }
    async checkErrorMessage(text){
        await expect(this.errorMessage).toBeDisplayed()
        await expect(this.errorMessage).toHaveText(text)
    }
    async openOtherProviders(){
        await this.otherProviders.waitForEnabled({ timeout: 7000 })
        await this.otherProviders.click()
        await expect(this.loginFacebook).toBeDisplayed()
        await expect(this.loginLinkedin).toBeDisplayed()
        await expect(this.loginGithub).toBeDisplayed()
    }
    async checkEmailFieldError(text){
        await expect(this.emailFieldError).toBeDisplayed()
        await expect(this.emailFieldError).toHaveText(text)
    }
    async goToResendPage() {
        await this.resendBtn.click()
        setTimeout(async function () {
            await browser.toHaveUrlContaining('/resend-email')
        }, 5000);
        await expect(browser).toHaveUrlContaining('/resend-email')        
    }
    async clickSingleSignOn() {
        await this.singleSignOn.click()
        await expect(this.companyEmailLabel).toBeDisplayed()
    }
    async fillCompanyEmail(email) {
        await this.inputCompanyEmail.addValue(email)
        await expect(this.inputCompanyEmail).toHaveValue(email)
    }
    async clickSubmitSSOBtn() {
        await this.submitSSOBtn.waitForEnabled({ timeout: 7000 })
        await this.submitSSOBtn.click()
    }
    async checkErroMessageSSO(text) {
        await expect(this.errorMessageSSO).toBeDisplayed()
        await expect(this.errorMessageSSO).toHaveText(text)
    }
    async clickCompanyNameBtn() {
        await this.companyNameBtn.waitForExist({ timeout: 7000 })
        await this.companyNameBtn.click()
        await expect(this.inputBuisnessName).toBeDisplayed()
    }
    async fillBusinessName(name) {
        await this.inputBuisnessName.addValue(name)
        await expect(this.inputBuisnessName).toHaveValue(name)
    }
    async goToPasswordRecoveryPage() {
        await this.forgotPasswordBtn.waitForExist({ timeout: 7000 })
        setTimeout(async function () {
            await browser.toHaveUrlContaining('/password-reset')
          }, 5000);
        await this.forgotPasswordBtn.click()
        await expect(browser).toHaveUrlContaining('/password-reset')  
    }
}

module.exports = new LoginPage()

