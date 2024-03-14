class AddGP
{
    constructor(page)
    {
        this.page=page
        this.btnSearchGP=page.getByRole('button', { name: 'Search' })
        this.btnAddGP=page.getByTestId('Add GP')
        //Add GP Page
        this.txtbox_GPTitle=page.getByTestId('Title')
        this.txtbox_GPInitials=page.getByTestId('Initial')
        this.txtbox_GPGivenName=page.getByTestId('Given Name') 
        this.txtbox_GPFamilyName=page.getByTestId('Family Name') 
        this.txtbox_GPCode=page.getByTestId('GP Code')
        this.txtbox_GPPracticeCode=page.getByTestId('Practice Code')
        this.txtbox_GPGMCCode=page.getByTestId('GMC Code')
        this.btnShowGP=page.getByText('Show')
        this.dropdown_UnknownPostcode=page.getByRole('button', { name: 'Please Select' })
        //GP Contact Details

        this.txtbox_GPPhone=page.getByTestId('GP Phone')
        this.txtbox_GPFax=page.getByTestId('Fax')
        this.txtbox_GPWorkPhone=page.getByTestId('Work Phone')
        this.txtbox_GPMobile=page.getByTestId('Mobile')
        this.txtbox_GPEmail=page.getByTestId('Email')
        this.btnSaveGP=page.getByTestId('Save')

        //Add GP To Patient
        this.txtbox_GPFullName=page.getByTestId('GP Full Name')
        //this.btn_PersonAdd=page.getByRole('button', { name: 'personAdd' })
       // this.btn_PersonAdd=page.getByRole('row', { name: '113 Mr R tiya India India tiya R GP010 - ZZ99 3VZ personAdd edit' }).getByLabel('personAdd')
       this.btn_PersonAdd=page.getByLabel('personAdd')
       
                                
        this.btnNextonSearchGP=page.getByTestId('Next')
   
        //Search GP
        this.txtbox_SearchGP=page.getByRole('textbox', { name: 'Search' })

    }
    async enterGpSearch()
    {
        await this.txtbox_SearchGP.type('sharon')
    }
    async enterAppGpSearch()
    {
        await this.txtbox_SearchGP.type('Bates')
    }
 
    async clickOnNextButtonOnSearchGp()
    {
        await this.btnNextonSearchGP.click()
    }

    async clickOnPersonAddButton()
    {
        await this.btn_PersonAdd.click()
    }

    async enterGPFullName(name)
    {
        await this.txtbox_GPFullName.type(name)
    }



    async clickOnSaveGPButton()
    {
        await this.btnSaveGP.click()
    }
    async enterGPEmail(name)
    {
        await this.txtbox_GPEmail.type(name)
    }
    async enterGPMobile(name)
    {
        await this.txtbox_GPMobile.type(name)
    }



    async enterGPWorkPhone(name)
    {
        await this.txtbox_GPWorkPhone.type(name)
    }
    async enterGPFax(name)
    {
        await this.txtbox_GPFax.type(name)
    }
    async enterGPPhone(name)
    {
        await this.txtbox_GPPhone.type(name)
    }
    async selectUnknownPostCode()
    {
        await this.dropdown_UnknownPostcode.click()
        await this.page.getByRole('option', { name: 'Not Asked' }).click()
    }
    async clickOnShowbnt()
    {
        await this.btnShowGP.click()
        await this.btnShowGP.click()

    }
    async enterGPGMCCode(name)
    {
        await this.txtbox_GPGMCCode.type(name)
    }
    async enterGPPracticeCode(name)
    {
        await this.txtbox_GPPracticeCode.type(name)
    }
    async enterGPCode(name)
    {
        await this.txtbox_GPCode.type(name)
    }





    async enterGPFamilyName(name)
    {
        await this.txtbox_GPFamilyName.type(name)
    }
    async enterGPGivenName(name)
    {
        await this.txtbox_GPGivenName.type(name)
    }
    async enterGPInitials(name)
    {
        await this.txtbox_GPInitials.type(name)
    }
    async enterGPTitle(name)
    {
        await this.txtbox_GPTitle.type(name)
    }
    async clickOnAddGPBtn()
    {
        await this.btnAddGP.click()
    }
    async clickOnSearchGPBtn()
    {
        await this.btnSearchGP.click()
    }
}
module.exports=AddGP