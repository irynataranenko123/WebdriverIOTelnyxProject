//const loginPage = require('../pageobjects/login.page')
const loginPage = require('../pageobjects/login.page');
const passwordRecoveryPage = require('../pageobjects/password.recovery.page')
const data = require('../src/utils/const')

describe('telnyx', async function () {
    beforeEach(async function () {
        await loginPage.open();
        await loginPage.acceptCookies()
        await loginPage.goToLoginPage();
        await loginPage.goToPasswordRecoveryPage(); 
    })
    it('A10 - Checking the ability to go to the Login page from Reset Password page', async function () {
        await passwordRecoveryPage.fillEmail(data.email)
        await passwordRecoveryPage.clickResetPAsswordBtn()
        await passwordRecoveryPage.clickLoginBtn()
    })
    it('A11 - Checking that the button "Reset password" is disabled with empty field', async function () {
        await passwordRecoveryPage.checkBlockedResetPasswordBtn()
        await passwordRecoveryPage.fillEmail(data.email)
        await passwordRecoveryPage.checkNotBlockedResetPasswordBtn()
    })
})