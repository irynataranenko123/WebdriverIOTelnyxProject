const loginPage = require('../pageobjects/login.page')
const resendEmailPage = require('../pageobjects/resend.email.page')
const data = require('../src/utils/const')

describe('telnyx', async function () {
    beforeEach(async function () {
        await loginPage.open();
        await loginPage.acceptCookies()
        await loginPage.goToLoginPage();
        await loginPage.goToResendPage()
    })    
    it('A5', async function () {
        await resendEmailPage.fillEmail(data.email)
        await resendEmailPage.clickSubmitBtn()
        await resendEmailPage.checkMessage(data.successResendEmail)
    })
    it('A6', async function () {
        await resendEmailPage.clickHaveAccountBtn() 
    })
    it('A7', async function () {
        await resendEmailPage.clickNeedSignUpBtn() 
    })
})