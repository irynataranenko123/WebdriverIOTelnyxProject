const contactPage = require('../pageobjects/contact.page')

describe('telnyx', async function () {
    it('A20 - Checking the ability to go to the Sign Up page from Contact page', async function () {
        await contactPage.open();
        await contactPage.acceptCookies()
        await contactPage.goToContactPage()
        await contactPage.clickLoginBtn()
    })
})
