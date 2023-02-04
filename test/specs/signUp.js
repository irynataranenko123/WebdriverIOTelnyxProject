const signUpPage = require('../pageobjects/sign.up.page')
const data = require('../src/utils/const')

describe('telnyx', async function () {
    beforeEach(async function () {
        await signUpPage.open();
        await signUpPage.acceptCookies()
        await signUpPage.goToSignUpPage();
    })   
    it('A12', async function () {
        await signUpPage.fillFullName(data.fullName)
        await signUpPage.fillPassword(data.password)
        await signUpPage.clickAgreeCheckbox()
        await signUpPage.clickSubmitBtn()
        await signUpPage.checkEmailError(data.errorFieldRequired)
    })
    it('A13', async function () {
        await signUpPage.fillWorkEmail(data.email)
        await signUpPage.fillPassword(data.password)
        await signUpPage.clickAgreeCheckbox()
        await signUpPage.clickSubmitBtn()
        await signUpPage.checkFullNameError(data.errorFieldRequired)
    })
    it('A14', async function () {
        await signUpPage.fillWorkEmail(data.email)
        await signUpPage.fillFullName(data.fullName)
        await signUpPage.fillPassword(data.shortPassword)
        await signUpPage.clickAgreeCheckbox()
        await signUpPage.clickSubmitBtn()
        await signUpPage.checkPasswordError(data.errorShortPassword)
    })
    it('A15', async function () {
        await signUpPage.fillWorkEmail(data.email)
        await signUpPage.fillFullName(data.fullName)
        await signUpPage.fillPassword(data.password)
        await signUpPage.clickSubmitBtn()
        await signUpPage.checkAgreeCheckboxError(data.errorAcceptTerms)
    })
    it('A16', async function () {
        await signUpPage.fillPassword(data.password)
        await signUpPage.clickShowPasswordBtn()
    })
    it('A17', async function () {
        await signUpPage.clickHavePromocodeBtn()
    })
    it('A18', async function () {
        await signUpPage.clickTermsBtn()
    })
    it('A19', async function () {
        await signUpPage.clickBottomPrivacyBtn()
    })
})