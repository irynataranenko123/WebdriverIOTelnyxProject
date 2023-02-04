const mainPage = require('./main.page')

class ContactPage extends mainPage{

    get loginBtn () {return $('[href="https://telnyx.com/sign-up"]')}

    async clickLoginBtn() {
        await this.loginBtn.waitForExist({ timeout: 7000 })
        await this.loginBtn.click()
        setTimeout(async function () {
            await browser.toHaveUrlContaining('/sign-up')
          }, 5000);
        await expect(browser).toHaveUrlContaining('/sign-up')
    }
}
module.exports = new ContactPage()
