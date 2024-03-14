class AddReferral{
    constructor(page)
    {
        this.page=page
        this.backbuttononaddreferral=page.getByRole('button', { name: 'Back Button' })
        this.dropdownReceiveReferralDate=page.getByTestId('Received Referral Date').getByPlaceholder('dd/mm/yyyy')
        this.dropdownApproveReferralDate=page.getByTestId('Approved Referral Date').getByPlaceholder('dd/mm/yyyy')
        this.dropdowndateofreferral=page.getByTestId('Date of Referral').getByPlaceholder('dd/mm/yyyy')
        this.dropdowntimeofreferral=page.getByTestId('Time of Referral').getByPlaceholder('hh:mm')
        this.dropdownsourceofreferral=page.getByTestId('Source of Referral').getByRole('button', { name: '​' })
        this.dropdownreferraltype=page.getByLabel('Referral Type')
        this.dropdownreferralreason=page.getByLabel('Referral Reason')
        this.dropdownreferrername=page.getByTestId('Referrer Name').getByRole('button', { name: '​' })
        this.dropdownmodeofreferral=page.getByTestId('Mode of Referral').getByRole('button', { name: '​' })
        
        this.txtboxreferringprofessional=page.getByLabel('Referring Professional')
        this.dropdownservice=page.getByTestId('Service').getByRole('button', { name: '​' })
        this.dropdownclinictype=page.getByTestId('Clinic Type').getByRole('button', { name: '​' })
        this.dropdowncliniclocation=page.getByTestId('clinicLocation').getByLabel('Open')
        this.dropdownteam=page.getByLabel('Team *')
        this.dropdownpatientcare=page.getByLabel('Patient Care')
        this.dropdownpreferrersexforassessment=page.getByTestId('Preferred Sex for Assessment').getByRole('button', { name: '​' })
        this.dropdownconsultant=page.getByTestId('Consultant').getByRole('button', { name: '​' })
        this.dropdownmethodofarrival=page.getByLabel('Method of Arrival *')
        this.dropdowntimeofarrival=page.getByTestId('Time of Arrival').getByPlaceholder('hh:mm')
        this.radiobuttonAwaitReferralAcceptance=page.getByLabel('Await Referral Acceptance')
        this.btnsave=page.getByTestId('Save')
        this.btnBack=page.getByLabel('Back Button')
        //await page.getByLabel('Back Button').click();

    }
    async clickOnBackButton()
    {
        await this.btnBack.click()
    }
    async clickOnSaveButton()
    {
        await this.btnsave.click()
    }
    async clickOnAwaitReferralAcceptance()
    {
        await this.radiobuttonAwaitReferralAcceptance.click()
    }
    async enterTimeOfArrival()
    {
        await this.dropdowntimeofarrival.type("10:10")
    }
    async selectMethodOfArrival()
    {
        await this.dropdownmethodofarrival.click()
        await this.page.getByRole('option', { name: 'Public Transport' }).click()
    }
    async selectConsultant()
    {
        await this.dropdownconsultant.click()
        await this.page.getByRole('option', { name: 'Mr Prerelease AutoEst' }).click()
       //await this.page.getByRole('option', { name: 'Dhanashree BATrainer' }).click()
    }

    async selectPreferredSexForAssessment()
    {
        await this.dropdownpreferrersexforassessment.click()
        await this.page.getByRole('option', { name: 'Male', exact: true }).click()
    }
    async selectPatientcare()
    {
        await this.dropdownpatientcare.click()
        await this.page.getByRole('option', { name: 'Out Patient' }).click()
    }
    
    
    async selectTeam()

    {
        await this.dropdownteam.click()
        await this.page.getByRole('option', { name: 'HP Region1' }).click()
       // await this.page.getByRole('option', { name: 'Team 1' }).click()
    }
    async selectClinicLocation()
    {
        await this.dropdowncliniclocation.click()
        await this.page.getByRole('option', { name: 'Cath Lab Location' }).click()
       //await this.page.getByRole('option', { name: 'Cardiology 1' }).click()
    }
    async selectClinicType()
    {
        await this.dropdownclinictype.click()
        await this.page.getByRole('option', { name: 'Cardiology' }).click()
    }

    async selectService()
    {
        await this.dropdownservice.click()
        await this.page.getByRole('option', { name: 'General Medicine Automation' }).click()
        //await this.page.getByRole('option', { name: 'Cardiology' }).click()
    }

    async selectModeOfreferral()
    {
        await this.dropdownmodeofreferral.click()
        await this.page.getByRole('option', { name: 'Email' }).click()
    }
    async enterReferringProfessional()
    {
        await this.txtboxreferringprofessional.type("BA Manoj")
    }
    async selectReferrerName()
    {
        await this.dropdownreferrername.click()
        await this.page.getByRole('option', { name: 'Wednesday Tester' }).first().click()

    }
    async selectReferralReason()
    {
        await this.dropdownreferralreason.click()
        await this.page.getByRole('option', { name: 'In patient' }).click()
    }
    async selectReferralType()
    {
        await this.dropdownreferraltype.click()
        await this.page.getByRole('option', { name: 'Clinical' }).click()
    }
    async selectSourceOfReferrals()
    {
        await this.dropdownsourceofreferral.click()
        await this.page.getByRole('option', { name: 'Self' }).click()
    }
    async enterTimeOfReferral()
    {
        await this.dropdowntimeofreferral.type("02:30")
    }

    async enterDateOfReferral()
    {
        await this.dropdowndateofreferral.type("29/12/2023")
    }
    async enterApproveReferralDate()
    {
        await this.dropdownApproveReferralDate.type("29/12/2023")
    }
    async enterReceiveReferrldate()
    {
        await this.dropdownReceiveReferralDate.type("29/12/2023")
    }
    async clickOnAddReferralBackButton()
    {
        await this.backbuttononaddreferral.click()
    }
}
module.exports=AddReferral