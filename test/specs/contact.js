const contactPage = require('../pageobjects/contact.page')

describe('telnyx', async function () {
    it('A20', async function () {
        await contactPage.open();
        await contactPage.acceptCookies()
        await contactPage.goToContactPage()
        await contactPage.clickLoginBtn()
    })
})
