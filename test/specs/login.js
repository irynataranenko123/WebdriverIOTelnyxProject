const loginPage = require('../pageobjects/login.page')
const data = require('../src/utils/const')

describe('telnyx', async function () {
    beforeEach(async function () {
        await loginPage.open();
        await loginPage.acceptCookies()
        await loginPage.goToLoginPage();
    })    
    it('A1', async function () {
        await loginPage.fillEmail(data.bannedEmail);
        await loginPage.fillPassword(data.password);
        await loginPage.clickSubmitBtn()
        await loginPage.checkErrorMessage(data.errorBlockedEmail)
    })
    it('A2', async function () {
        await loginPage.openOtherProviders()
    })
    it('A3', async function () {
        await loginPage.fillPassword(data.password)
        await loginPage.clickSubmitBtn()
        await loginPage.checkEmailFieldError(data.errorRequired)
    })
    it('A4', async function () {
        await loginPage.fillEmail(data.invalidEmail)
        await loginPage.fillPassword(data.password)
        await loginPage.clickSubmitBtn()
        await loginPage.checkEmailFieldError(data.errorInvalidEmail)
    })
    it('A8', async function () {
        await loginPage.clickSingleSignOn()
        await loginPage.fillCompanyEmail(data.email)
        await loginPage.clickSubmitSSOBtn()
        await loginPage.checkErroMessageSSO(data.errorResourceNotFound)
    })
    it('A9', async function () {
        await loginPage.clickSingleSignOn()
        await loginPage.clickCompanyNameBtn()
        await loginPage.fillBusinessName(data.businessName)
        await loginPage.clickSubmitSSOBtn()
        await loginPage.checkErroMessageSSO(data.errorResourceNotFound)
    })
})