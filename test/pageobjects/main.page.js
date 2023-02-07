module.exports = class MainPage {
    
    get acceptBtn () {return $('.sc-df34c536-0 > :nth-child(1) > .sc-5d3a275a-1')};
    get loginBtn () {return $('.sc-ee0ec023-2 > :nth-child(4)')};
    get signUpBtn () {return $('.sc-14c941d7-5.sc-14c941d7-7 .sc-5d3a275a-0 .sc-5d3a275a-1')};
    get talkToExpertBtn () {return $('[href="/contact-us"]')}
    
    async open () {
        return browser.url('https://telnyx.com/')
    }
    async acceptCookies() {
        if(this.acceptBtn.isExisting()) {
            this.acceptBtn.click()
        }
    }
    async goToLoginPage() {
        await this.loginBtn.waitForExist({ timeout: 10000 })
        this.loginBtn.click()
        setTimeout(async function () {
            await browser.toHaveUrlContaining('/login')
        }, 10000);
        await expect(browser).toHaveUrlContaining('/login')
    }
    async goToSignUpPage() {
        await this.signUpBtn.waitForExist({ timeout: 10000 })
        this.signUpBtn.click()
        setTimeout(async function () {
            await browser.toHaveUrlContaining('/sign-up')
        }, 10000);
        await expect(browser).toHaveUrlContaining('/sign-up')
    }
    async goToContactPage() {
        await this.talkToExpertBtn.waitForExist({ timeout: 10000 })
        this.talkToExpertBtn.click()
        setTimeout(async function () {
            await browser.toHaveUrlContaining('/contact-us')
        }, 10000);
        await expect(browser).toHaveUrlContaining('/contact-us')
    }
}