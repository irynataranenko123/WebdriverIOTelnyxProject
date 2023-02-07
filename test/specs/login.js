const loginPage = require('../pageobjects/login.page')
const data = require('../src/utils/const')

describe('telnyx', async function () {
    beforeEach(async function () {
        await loginPage.open();
        await loginPage.acceptCookies()
        await loginPage.goToLoginPage();
    })    
    it('A1 - Checking that it is not possible to login with baned email', async function () {
        await loginPage.fillEmail(data.bannedEmail);
        await loginPage.fillPassword(data.password);
        await loginPage.clickSubmitBtn()
        await loginPage.checkErrorMessage(data.errorBlockedEmail, data.errorRecaptcha)
    })
    it('A2 - Checking that other OAuth Providers are visible on the Login Page', async function () {
        await loginPage.openOtherProviders()
    })
    it('A3 - Checking that it is not possible to login without email', async function () {
        await loginPage.fillPassword(data.password)
        await loginPage.clickSubmitBtn()
        await loginPage.checkEmailFieldError(data.errorRequired)
    })
    it('A4 - Checking that it is not possible to login with invalid email', async function () {
        await loginPage.fillEmail(data.invalidEmail)
        await loginPage.fillPassword(data.password)
        await loginPage.clickSubmitBtn()
        await loginPage.checkEmailFieldError(data.errorInvalidEmail)
    })
    it('A8 - Checking that it is not possible to Single Sign-On with invalid email', async function () {
        await loginPage.clickSingleSignOn()
        await loginPage.fillCompanyEmail(data.email)
        await loginPage.clickSubmitSSOBtn()
        await loginPage.checkErroMessageSSO(data.errorResourceNotFound)
    })
    it('A9 - Checking that it is not possible to Single Sign-On with invalid company name', async function () {
        await loginPage.clickSingleSignOn()
        await loginPage.clickCompanyNameBtn()
        await loginPage.fillBusinessName(data.businessName)
        await loginPage.clickSubmitSSOBtn()
        await loginPage.checkErroMessageSSO(data.errorResourceNotFound)
    })
})