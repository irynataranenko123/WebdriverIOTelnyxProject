const signUpPage = require('../pageobjects/sign.up.page')
const data = require('../src/utils/const')

describe('telnyx', async function () {
    beforeEach(async function () {
        await signUpPage.open();
        await signUpPage.acceptCookies()
        await signUpPage.goToSignUpPage();
    })   
    it('A12 - Checking that is not possible to Sign Up without an Email', async function () {
        await signUpPage.fillFullName(data.fullName)
        await signUpPage.fillPassword(data.password)
        await signUpPage.clickAgreeCheckbox()
        await signUpPage.clickSubmitBtn()
        await signUpPage.checkEmailError(data.errorFieldRequired)
    })
    it('A13 - Checking that is not possible to Sign Up without a Full Name', async function () {
        await signUpPage.fillWorkEmail(data.email)
        await signUpPage.fillPassword(data.password)
        await signUpPage.clickAgreeCheckbox()
        await signUpPage.clickSubmitBtn()
        await signUpPage.checkFullNameError(data.errorFieldRequired)
    })
    it('A14 - Checking that is not possible to Sign Up with a short password', async function () {
        await signUpPage.fillWorkEmail(data.email)
        await signUpPage.fillFullName(data.fullName)
        await signUpPage.fillPassword(data.shortPassword)
        await signUpPage.clickAgreeCheckbox()
        await signUpPage.clickSubmitBtn()
        await signUpPage.checkPasswordError(data.errorShortPassword)
    })
    it('A15 - Checking that is not possible to Sign Up without checked checkbox "I agree to the Terms and Conditions"', async function () {
        await signUpPage.fillWorkEmail(data.email)
        await signUpPage.fillFullName(data.fullName)
        await signUpPage.fillPassword(data.password)
        await signUpPage.clickSubmitBtn()
        await signUpPage.checkAgreeCheckboxError(data.errorAcceptTerms)
    })
    it('A16 - Checking the ability to see a password', async function () {
        await signUpPage.fillPassword(data.password)
        await signUpPage.clickShowPasswordBtn()
    })
    it('A17 - Checking the ability to open the field to fill the promo code', async function () {
        await signUpPage.clickHavePromocodeBtn()
    })
    it('A18 - Checking the ability to open Terms and Conditions on the Sign Up page', async function () {
        await signUpPage.clickTermsBtn()
    })
    it('A19 - Checking the ability to open Privacy Policy on the bottom of the Sign Up page', async function () {
        await signUpPage.clickBottomPrivacyBtn()
    })
})