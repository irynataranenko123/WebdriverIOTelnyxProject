const mainPage = require('./main.page')

class SignUpPage extends mainPage{

    get inputWorkEmail () {return $('#email')};
    get inputFullName () {return $('#full_name')};
    get inputPassword () {return $('#password')};
    get agreeCheckbox () {return $('.sc-26f7330-5 > .sc-e117dd75-0')};
    get submitBtn () {return $('[type="submit"]')}
    get emailError () {return $('#email_error')}
    get fullNameError () {return $('#full_name_error')}
    get shortPasswordError () {return $('#password_requirements div:nth-child(2)')}
    get agreeCheckboxError() {return $('.sc-570b157-1 > span')}
    get showPasswordBtn () {return $('[data-prefix="fas"]')}
    get havePromocodeBtn () {return $('.sc-5d3a275a-24')}
    get inputPromocode () {return $('#promo_code')}
    get termsBtn () {return $('[href="https://policies.google.com/terms"]')}
    get bottomPrivacyBtn () {return $('[href="https://policies.google.com/privacy"]')}

    async fillWorkEmail(email) {
        this.inputWorkEmail.addValue(email)
        await expect(this.inputWorkEmail).toHaveValue(email)
    }
        async fillFullName(name) {
        this.inputFullName.addValue(name)
        await expect(this.inputFullName).toHaveValue(name)
    }
    async fillPassword(password) {
        this.inputPassword.addValue(password)
        await expect(this.inputPassword).toHaveValue(password)
    }
    async clickAgreeCheckbox() {
        this.agreeCheckbox.click()
    }
    async clickSubmitBtn() {
        await this.submitBtn.waitForEnabled({ timeout: 10000 })
        this.submitBtn.click()
    }
    async checkEmailError(text) {
        await expect(this.emailError).toBeDisplayed()
        await expect(this.emailError).toHaveText(text)
    }
    async checkFullNameError(text) {
        await expect(this.fullNameError).toBeDisplayed()
        await expect(this.fullNameError).toHaveText(text)
    }
    async checkPasswordError(text) {
        await expect(this.shortPasswordError).toBeDisplayed()
        await expect(this.shortPasswordError).toHaveText(text)
        await expect(this.shortPasswordError).toHaveAttr('aria-hidden', 'false')
    }
    async checkAgreeCheckboxError(text) {
        await expect(this.agreeCheckboxError).toBeDisplayed()
        await expect(this.agreeCheckboxError).toHaveText(text)
    }
    async clickShowPasswordBtn() {
        await expect(this.inputPassword).toHaveAttr('type', 'password')
        this.showPasswordBtn.click()
        await expect(this.inputPassword).toHaveAttr('type', 'text')
    }
    async clickHavePromocodeBtn() {
        await this.havePromocodeBtn.waitForExist({ timeout: 10000 })
        this.havePromocodeBtn.click()
        await expect(this.inputPromocode).toBeDisplayed()
    }
    async clickTermsBtn() {
        await this.termsBtn.waitForExist({ timeout: 10000 })
        this.termsBtn.click()
        setTimeout(async function () {
            await browser.toHaveUrlContaining('/terms')
        }, 10000);
        await expect(browser).toHaveUrlContaining('/terms')
    }
    async clickBottomPrivacyBtn() {
        await this.bottomPrivacyBtn.waitForExist({ timeout: 7000 })
        this.bottomPrivacyBtn.click()
        setTimeout(async function () {
            await browser.toHaveUrlContaining('/privacy')
        }, 10000);
        await expect(browser).toHaveUrlContaining('/privacy')
    }
}

module.exports = new SignUpPage()