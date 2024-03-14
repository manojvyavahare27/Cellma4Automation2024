//import { test, expect, Page, chromium } from '@playwright/test';
class ConfirmExisting
{
    constructor(page)
    {
        this.page=page
        this.txtbox_alsoknownas=page.locator("xpath=//input[@id='Also Known As']")
        this.dropdown_InterpreterReq=page.getByTestId('Interpreter Required').getByRole('button', { name: 'No' })
        this.txtbox_emailId=page.locator('input[name="addEmail"]')
        this.txtbox_mobileNo=page.locator('input[name="addMobile"]')
        this.txtbox_phoneNo=page.locator('input[name="addPhone"]')
        //Next of Kin
        this.dropdown_NextofKinTitle=page.getByTestId('Title').getByRole('button', { name: '​' })
        this.txtbox_givenName=page.getByTestId('Given Name')
        this.txtbox_familyName=page.getByTestId('Family Name')
        this.dropdown_Relcationship=page.getByTestId('Relationship').getByRole('button', { name: '​' })
        this.txtbox_kinEmailId=page.locator('input[name="kinEmail"]')
        this.txtbox_kinMobile=page.locator('input[name="kinMobile"]')
        this.txtbox_kinPhone=page.locator('input[name="kinPhone"]')

        this.txtbox_AddCompanyName=page.locator('input[name="addCompanyName"]')
        this.txtbox_numberRoad=page.locator('input[name="addAddress1"]')
        this.txtbox_postcode=page.locator('input[name="postcode"]')

        this.txtbox_tcsEmailId=page.locator("xpath=//input[@name='tempAddressEmail']")
        this.txtbox_tcdMobile=page.locator('input[name="tempAddressMobile"]')
        this.txtbox_tcdPhone=page.locator("xpath=//input[@name='tempAddressPhone']")
        this.txtbox_tcdstartDate=page.locator("xpath=//input[@name='tempAddressStartDate']")
        this.txtbox_tcdendDate=page.locator("xpath=//input[@name='tempAddressEndDate']")
        this.dropdown_Billing=page.getByTestId('Billing').getByRole('button', { name: 'Yes' })


        this.txtbox_TempCompanyName=page.locator('#tempAddressCompanyName')
        this.txtbox_tempAddNumberNRoad=page.locator("xpath=//input[@name='tempAddAddress1']")
        this.txtbox_tempAddPostcode=page.locator("xpath=//input[@name='tempAddAddress5']")
        this.btn_confirmExistingDetails=page.locator("xpath=//div[contains(text(),'Confirm Existing Details')]")
        this.btn_SaveChangeDetails=page.locator("xpath=//div[contains(text(),'Save Changed Details')]")

    }
    async enterTempAddressDetails()
    {
        await this.txtbox_TempCompanyName.fill('')
        await this.txtbox_TempCompanyName.type('Riomed UK')
        await this.txtbox_tempAddNumberNRoad.fill('')
        await this.txtbox_tempAddNumberNRoad.type('FC Road')
        await this.txtbox_tempAddPostcode.fill('')
        await this.txtbox_tempAddPostcode.type('411002')


    }
    async selectBilling()
    {
        await this.dropdown_Billing.click()
        await this.page.getByRole('option', { name: 'No' }).click()
    }
    async enterTempContactDetails()
    {
        await this.txtbox_tcsEmailId.fill('')
        await this.txtbox_tcsEmailId.type('manoj.vyavahare@riomed.com')
        await this.txtbox_tcdMobile.fill('')
        await this.txtbox_tcdMobile.type('9890098920')
        await this.txtbox_tcdPhone.fill('')
        await this.txtbox_tcdPhone.type('9762713710')
        await this.txtbox_tcdstartDate.fill('')
        await this.txtbox_tcdstartDate.type('01/05/2023')
        await this.txtbox_tcdendDate.fill('')
        await this.txtbox_tcdendDate.type('30/05/2023')
    }
    async enterPostCode()
    {
        await this.txtbox_postcode.fill('')
        await this.txtbox_postcode.type('411000')
    }
    async enterRoadNumber()
    {
        await this.txtbox_numberRoad.fill('')
        await this.txtbox_numberRoad.type('15 Number, FC Road')
    }
    async enterCompanyName()
    {
        await this.txtbox_AddCompanyName.fill('')
        await this.txtbox_AddCompanyName.type('Riomed UK')
    }
    async enterPhoneNoofNextOfKin()
    {
        await this.txtbox_kinPhone.fill('')
        await this.txtbox_kinPhone.type('654321654')
    }
    async enterMobileforNextOfKin()
    {
        await this.txtbox_kinMobile.fill('')
        await this.txtbox_kinMobile.type('9890098900')
    }
    async enterEmailIsForNextofKin()
    {
        await this.txtbox_kinEmailId.fill('')
        await this.txtbox_kinEmailId.type('Example@gmail.com')
    }
    async selectRelationship()
    {
        await this.dropdown_Relcationship.click()
        await this.page.getByRole('option', { name: 'Brother' }).click()

    }
    async enterFamilyNameforNextofKin()
    {
        await this.txtbox_familyName.fill('')
        await this.txtbox_familyName.type('Familyname')
    }
    async enterGivenNameOfNextOfKin()
    { 
        await this.txtbox_givenName.fill('')
        await this.txtbox_givenName.type('Givenname')
    }
    async selectTitleForNextofKin()
    {
        await this.dropdown_NextofKinTitle.click()
        await this.page.getByRole('option', { name: 'Mr', exact: true }).click()
    }
    async enterPhoneNo()
    {
        await this.txtbox_phoneNo.fill('')
        await this.txtbox_phoneNo.type('8065432165')
    }
    async enterMobile()
    {
        await this.txtbox_mobileNo.fill('')
        await this.txtbox_mobileNo.type('9762713710')
    }
    async enterEmailId()
    {
        await this.txtbox_emailId.fill('')
        await this.txtbox_emailId.type('manoj.vyavahare@riomed.com')
    }
    async selectInterpreterReq()
    {
        await this.dropdown_InterpreterReq.click()
        await this.page.getByRole('option', { name: 'Yes' }).click()

    }
    async entertxtboxAlsoKnow()
    {
        await this.txtbox_alsoknownas.fill('')
        await this.txtbox_alsoknownas.type('Cellma')
    }
    
    async clickOnSaveChangeDetails()
    {
        await this.btn_SaveChangeDetails.click()
    }
    
    async clickOnConfirmExistingDetails()
    {        
     const value= await this.btn_confirmExistingDetails.click()
    }

    async checktxtTempPostCode()
    {        
     const value= await this.txtbox_tempAddPostcode.inputValue()
     return value     
    }

    async checktxtTempAddNoNRoad()
    {        
     const value= await this.txtbox_tempAddNumberNRoad.inputValue()
     return value     
    }

    async checktxtTCDEndDate()
    {        
     const value= await this.txtbox_tcdendDate.inputValue()
     return value     
    }

    async checktxtTCDStartDate()
    {        
     const value= await this.txtbox_tcdstartDate.inputValue()
     return value     
    }

    async checktxtTCDPhone()
    {        
     const value= await this.txtbox_tcdPhone.inputValue()
     return value     
    }

    async checktxtTCDMobile()
    {        
     const value= await this.txtbox_tcdMobile.inputValue()
     return value     
    }

    async checktxtTCDEmailId()
    {        
     const value= await this.txtbox_tcsEmailId.inputValue()
     return value     
    }

    async checktxtPostCode()
    {        
     const value= await this.txtbox_postcode.inputValue()
     return value     
    }

    async checktxtnumberAndRoad()
    {        
     const value= await this.txtbox_numberRoad.inputValue()
     return value     
    }

    async checktxtAddCompanyName()
    {        
     const value= await this.txtbox_AddCompanyName.inputValue()
     return value     
    }

    async checktxtKinPhone()
    {        
     const value= await this.txtbox_kinPhone.inputValue()
     return value     
    }

    async checktxtKinMobile()
    {        
     const value= await this.txtbox_kinMobile.inputValue()
     return value     
    }

    async checktxtKinEmailId()
    {        
     const value= await this.txtbox_kinEmailId.inputValue()
     return value     
    }

    async checktxtFamilyName()
    {        
     const value= await this.txtbox_familyName.inputValue()
     return value     
    }

    async checktxtGivenName()
    {        
     const value= await this.txtbox_givenName.inputValue()
     return value     
    }

    async checktxtPhoneNo()
    {        
     const value= await this.txtbox_phoneNo.inputValue()
     return value     
    }

    async checktxtMobileNo()
    {        
     const value= await this.txtbox_mobileNo.inputValue()
     return value     
    }

    async checktxtEmailId()
    {        
     const value= await this.txtbox_emailId.inputValue()
     return value     
    }

    async checktxtAlsoKnownAs()
    {        
     const value= await this.txtbox_alsoknownas.inputValue()
     return value     
    }

   







    // async checkDropdownInterpreterRequired()
    // {        
    //  const value= await this.dropdown_InterpreterReq.inputValue()
    //  return value     
    // }

    // async extractSelectedDisplayedValue(selectedOption) {
    //     return selectedOption.evaluate(sel => dropdown_InterpreterReq.textContent);
    //     const value= dropdown_InterpreterReq
    //   }


}
module.exports=ConfirmExisting