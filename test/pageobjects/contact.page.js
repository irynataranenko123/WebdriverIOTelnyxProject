const mainPage = require('./main.page')

class ContactPage extends mainPage{

    get loginBtn () {return $('[href="https://telnyx.com/sign-up"]')}

    async clickLoginBtn() {
        await this.loginBtn.waitForExist({ timeout: 10000 })
        await this.loginBtn.click()
        setTimeout(async function () {
            await browser.toHaveUrlContaining('/sign-up')
        }, 10000);
        await expect(browser).toHaveUrlContaining('/sign-up')
    }
}
module.exports = new ContactPage()
