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
    it('A10', async function () {
        await passwordRecoveryPage.fillEmail(data.email)
        await passwordRecoveryPage.clickResetPAsswordBtn()
        await passwordRecoveryPage.clickLoginBtn()
    })
    it('A11', async function () {
        await passwordRecoveryPage.checkBlockedResetPasswordBtn()
        await passwordRecoveryPage.fillEmail(data.email)
        await passwordRecoveryPage.checkNotBlockedResetPasswordBtn()
    })
})