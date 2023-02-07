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
    it('A5 - Checking the ability to resend verification email', async function () {
        await resendEmailPage.fillEmail(data.email)
        await resendEmailPage.clickSubmitBtn()
        await resendEmailPage.checkMessage(data.successResendEmail)
    })
    it('A6 - Checking the ability to do to the Sign Up page from the Resend Email page', async function () {
        await resendEmailPage.clickHaveAccountBtn() 
    })
    it('A7 - Checking the ability to do to the Login page from the Resend Email page', async function () {
        await resendEmailPage.clickNeedSignUpBtn() 
    })
})