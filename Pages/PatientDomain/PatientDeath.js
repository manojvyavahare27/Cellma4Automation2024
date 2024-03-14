class PatientDeath
{
    constructor(page)
    {
        this.page=page
        this.txt_causeOfDeath=page.getByLabel('Search Immediate cause of Death *')
        this.checkBox_Cryptosporidiosis=page.getByRole('option', { name: 'Cryptosporidiosis' }).getByRole('checkbox')
        this.txtbox_CauseOfDeathWithCode=page.getByLabel('Search Immediate Cause of death code')
        this.txtbox_CauseofDeathType=page.getByTestId('otherCauseOfDeathType').getByLabel('Other Cause of Death Type')
        this.checkbox_Deathtype=page.getByRole('option', { name: 'Cancer' }).getByRole('checkbox')
        this.checkboxForSearchAntecedentcauseofDeath=page.getByRole('checkbox')
        this.txtbox_Additionalnotes=page.getByLabel('Additional Notes(If any)')
        this.calendar_DateofDeath=page.getByPlaceholder('dd/mm/yyyy')
        //this.dropdown_MarkPatientAsDead=page.getByRole('button', { name: 'No' })
        this.dropdown_MarkPatientAsDead=page.getByTestId('Mark the Patient Dead').getByRole('button', { name: 'No' })
        this.checkbox_SearchAntecedentcauseofDeath=page.getByTestId('Search Antecedent cause of Death').getByLabel('Search Antecedent cause of Death')

        this.btn_Ok=page.getByTestId('Ok')
        this.btn_SaveDeadPatient=page.getByTestId('Set')
        this.btn_ViewOnlyInReadOnly=page.getByTestId('View in Read Only Mode')

    }
    async checkSearchAntecedentcauseofDeath()
    {
        await this.checkbox_SearchAntecedentcauseofDeath.type('Pulmonary cryptococcosis')
       await this.checkboxForSearchAntecedentcauseofDeath.click()
    }
    async clickOnViewInReadOnly()
    {
        await this.btn_ViewOnlyInReadOnly.click()
    }
    async clickOnSaveButton()
    {
        await this.btn_SaveDeadPatient.click()
    }
    async selectMarkPatientAsDead()
    {
        await this.dropdown_MarkPatientAsDead.click()
        await this.page.getByRole('option', { name: 'Yes' }).click()
        await this.btn_Ok.click()
    }

    async selectDateOfDeath(DeathDate)
    {
        await this.calendar_DateofDeath.type(DeathDate)
        await this.page.getByPlaceholder('hh:mm').type("12:10")

    }
    async enterAdditionalNotes()
    {
        await this.txtbox_Additionalnotes.type("Added for testing")
    }
    async enterCauseOfDeathType()
    {
        await this.page.getByLabel('Other Cause of Death Type').click()
        await this.txtbox_CauseofDeathType.fill('Cancer')        
        await this.checkbox_Deathtype.click()
       // await this.checkbox_Deathtype.click()
    }
    async enterCauseOfDeathWithCode()
    {
        await this.txtbox_CauseOfDeathWithCode.click()
    }
    async enterCauseOfDeathReason()
    {
        await this.txt_causeOfDeath.type("Cryptosporidiosis")
    }
    async selectCheckBoxDeathCauseReason()
    {
        await this.checkBox_Cryptosporidiosis.click()
    }

}
module.exports=PatientDeath