class SinglePageRegistration
{
    constructor(page)
    {
        this.page=page
        this.dropdown_marritalStatus=page.locator("xpath=//div[@id='mui-component-select-patMaritalStatus']")
        this.dropdown_Religion=page.getByTestId('Religion').getByRole('button', { name: '​' })
        this.dropdown_SourceOfReferral=page.getByTestId('Source of Referral').getByRole('button', { name: '​' })
        this.dropdown_SelectService=page.getByTestId('Service').getByRole('button', { name: '​' })
        this.dropdown_ServiceLocation=page.getByTestId('Service Location').getByRole('button', { name: '​' })
        this.dropdown_ServiceType=page.getByRole('button', { name: 'In Patient' })
        this.dropdown_Consultant=page.getByTestId('Consultant').getByRole('button', { name: '​' })
        this.dropdown_PatientType=page.getByTestId('Patient Type').getByRole('button', { name: '​' })
        this.dropdown_AppointmentType=page.getByTestId('Appointment Type').getByRole('button', { name: '​' })
        this.dropdown_MethodOfArrival=page.getByTestId('Method of Arrival').getByRole('button', { name: '​' })
        this.dropdown_CountyOfBirth=page.getByTestId('Country Of Birth').getByRole('button', { name: '​' })
        this.dropdown_ReferralReason=page.getByTestId('Referral Reason').getByRole('button', { name: '​' })
        this.dropdown_Language=page.getByTestId('Language').getByRole('button', { name: '​' })
        this.dropdown_Ethnicity=page.getByTestId('Ethnicity').getByRole('button', { name: '​' })
        this.dropdown_Occupation=page.getByTestId('Occupation').getByRole('button', { name: '​' })
        this.dropdown_Nationality=page.getByTestId('Nationality').getByRole('button', { name: '​' })
        this.txtbox_RoadAndNo=page.getByTestId('Number & Road')
        this.txtbox_Country=page.getByTestId('Country')
        this.dropdown_PrimaryDisablity=page.getByTestId('Primary Disability').getByRole('button', { name: '​' })
        this.btn_Save=page.getByTestId('Save')

    }
    async selectPrimaryDisablity()
    {
        await this.dropdown_PrimaryDisablity.click()
        await this.page.getByRole('option', { name: 'Arthritis' }).getByRole('checkbox').click()
    }
    async clickOnSavebtn()
    {
        await this.btn_Save.click()
    }
    async enterCountry()
    {
        await this.txtbox_Country.type("India")
    }
    async enterRoadAndNo()
    {
      await this.txtbox_RoadAndNo.type("15 number")
    }
    async selectNationality()
    {
        await this.dropdown_Nationality.click()
        await this.page.getByRole('option', { name: 'Indian' }).click()
    }
    async selectOccupation()
    {
        await this.dropdown_Occupation.click()
        await this.page.getByRole('option', { name: 'Trainer', exact: true }).click()
    }
    async selectEthnicity()
    {
        await this.dropdown_Ethnicity.click()
        await this.page.getByRole('option', { name: 'Indian', exact: true }).click()
    }
    async selectLanguage()
    {
        await this.dropdown_Language.click()
        await this.page.getByRole('option', { name: 'Hindi' }).click()
    }
    async selectReferralReason()
    {
        await this.dropdown_ReferralReason.click()
        await this.page.getByRole('option', { name: 'In patient' }).click()
        //await this.page.getByRole('option', { name: 'Need Advice' }).click()
    }
    async selectMethodOfArrival()
    {
        await this.dropdown_MethodOfArrival.click()
        await this.page.getByRole('option', { name: 'By ambulance' }).click()
    }
    async SelectCountryOfBirth()
    {
        await this.dropdown_CountyOfBirth.click()
        await this.page.getByRole('option', { name: 'India', exact: true }).click()
    }
    async selectAppointmentType()
    {
        await this.dropdown_AppointmentType.click()
        await this.page.getByRole('option', { name: 'Vaccine 1st dose', exact: true }).click()
    }
    async selectPatientType()
    {
        await this.dropdown_PatientType.click()
        await this.page.getByRole('option', { name: 'Regular', exact: true }).click()
    }
    async selectConsultant()
    {
        await this.dropdown_Consultant.click()
        await this.page.getByRole('option', { name: 'Dr. Anuja Mulay' }).click()
    }
    async SelectServiceType()
    {
        await this.dropdown_ServiceType.click()
        await this.page.getByRole('button', { name: 'In Patient' }).click()
    }
    async selectServiceLocation()
    {
        await this.dropdown_ServiceLocation.click()
        await this.page.getByRole('option', { name: 'BHRC location' }).click()
    }

    async SelectService()
    {
        await this.dropdown_SelectService.click()
        await this.page.getByRole('option', { name: 'Cardiology' }).click()
    }
    async selectSourceOfReferral()
    {
        await this.dropdown_SourceOfReferral.click()
        await this.page.getByRole('option', { name: 'Self' }).click()
    }
    async selectReligion()
    {
        await this.dropdown_Religion.click()
        await this.page.getByRole('option', { name: 'Hindu' }).click()
    }
    
    async selectMarritalStatus()
    {
        await this.dropdown_marritalStatus.click()
        await this.page.getByRole('option', { name: 'Single' }).click()
    }
    
}
module.exports=SinglePageRegistration