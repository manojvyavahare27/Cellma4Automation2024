import { test, expect, Page, chromium } from '@playwright/test';
import LoginPage from '../../../Pages/BaseClasses/LoginPage';
import Homepage from '../../../Pages/BaseClasses/Homepage';
import PatientSearch from '../../../Pages/PatientDomain/PatientSearch';
import PatientDetails from '../../../Pages/PatientDomain/PatientDetails'
import Environment from '../../../Pages/BaseClasses/Environment';
import Menu  from '../../../Pages/BaseClasses/Menu';
import PatientWizard from '../../../Pages/PatientDomain/PatientWizard';
import PatientDuplicateCheck from '../../../Pages/PatientDomain/PatientDuplicateCheck';
import Demographics from '../../../Pages/PatientDomain/Demographics';
//import PatientWizard from '../../Pages/PatientWizard';
//import PatientWizard from '../../Pages/PatientWizard';
import AddPatient from '../../../Pages/PatientDomain/AddPatient';
import AddAddress from '../../../Pages/PatientDomain/AddAddress';
import AddPIP from '../../../Pages/PatientDomain/AddPIP';
import ViewPIP from '../../../Pages/PatientDomain/ViewPIP';
import AddGP from '../../../Pages/PatientDomain/AddGP';
import PrintIDCard from '../../../Pages/PatientDomain/PrintIDCard';
import ConfirmExisting from '../../../Pages/PatientDomain/ConfirmExisting';
import TopBlueBar from '../../../Pages/BaseClasses/TopBlueBar';
import EditPatient from '../../../Pages/PatientDomain/EditPatient'

const logindata= JSON.parse(JSON.stringify(require("../../../TestData/PatientDomain/Login.json")))
const patientdetailsdata=JSON.parse(JSON.stringify(require("../../../TestData/PatientDomain/PatientDetails.json")))
const pipdetailsdata=JSON.parse(JSON.stringify(require("../../../TestData/PatientDomain/PIPDetails.json")))
const gpdata=JSON.parse(JSON.stringify(require("../../../TestData/PatientDomain/NewGPDetails.json")))

test('Demographics changes for Patient @Functional', async ({page}) => {
    const loginpage=new LoginPage(page)
    const homepage=new Homepage(page)
    const environment=new Environment(page) 
    const patientsearch=new PatientSearch(page)
    const patientduplicatecheck=new PatientDuplicateCheck(page)
    const addpatient=new AddPatient(page)
    const addaddress=new AddAddress(page)
    const demogrphics=new Demographics(page)
    const addpip=new AddPIP(page)
    const viewpip=new ViewPIP(page)
    const addgp=new AddGP(page)
    const printidcard=new PrintIDCard(page)
    const confirmexisting=new ConfirmExisting(page)
    const menu=new Menu(page)
    const topbluebar=new TopBlueBar(page)
    const editpatient=new EditPatient(page)

    await page.goto(environment.Test)  
    await loginpage.enterUsername(logindata.username)
    await loginpage.enter_Password(logindata.password)    
    await loginpage.clickOnLogin()    
    
    await homepage.clickOnPatientIcon()    

    await patientsearch.clickOnSearchButton()
    // await expect(page.getByText('Identifier required')).toHaveText('Identifier required')
    // await expect(page.getByText('Identification Id required')).toHaveText('Identification Id required')
    await patientsearch.enterGivenName(patientdetailsdata.New_GivenName)
    await patientsearch.enterFamilyName(patientdetailsdata.New_FamilyName)
    
    await patientsearch.clickOnSearchButton()
    await patientsearch.clickOnSearchPatientLink()
    // await patientsearch.ClickOnNoConfirmLegitimateRelationship()
    // await patientsearch.clickOnSearchPatientLink()
    // await patientsearch.ClickOnYesConfirmLegitimateRelationship()
    await patientsearch.clickOnBackbuttonOnPatientSearch()

    //await confirmexisting.clickOnConfirmExistingDetails()
    await page.pause()
    await topbluebar.clickOnBannerButtonKeyboardArrow()
    await topbluebar.ClickOnViewAllContactDetails()

    //Click On Links
    await demogrphics.ClickOnLinkLinks()
    await demogrphics.ClickOnLinkDetails()
    await demogrphics.ClickOnCloseAllPopup()

    await demogrphics.ClickOnLinkLinks()
    await demogrphics.ClickOnLinkPatientIdentifier()
    await demogrphics.ClickOnCloseAllPopup()

    await demogrphics.ClickOnLinkLinks()
    await demogrphics.ClickOnLinkPIP()
    await demogrphics.ClickOnCloseAllPopup()

    await demogrphics.ClickOnLinkLinks()
    await demogrphics.ClickOnLinkQAndA()
    await demogrphics.ClickOnCloseAllPopup()

    await demogrphics.ClickOnLinkLinks()
    await demogrphics.ClickOnLinkSummary()
    await demogrphics.ClickOnCloseAllPopup()

    await demogrphics.ClickOnLinkLinks()
    await demogrphics.ClickOnLinkWorkList()
    await demogrphics.ClickOnCloseAllPopup()

    await demogrphics.ClickOnLinkLinks()
    await demogrphics.ClickOnLinkTest()
    await demogrphics.SelectDropdownTestPatient()
    //await expect(page.getByText('Successfully marked patient as test patient')).toHaveText('Successfully marked patient as test patient')
    
    await topbluebar.clickOnBannerButtonKeyboardArrow()
    await topbluebar.ClickOnViewAllContactDetails()
 
    //await page.pause()

    //Expands Patient Details on demographics page
    await demogrphics.ClickOnExpandsPatientInformation()
    //await demogrphics.ClickOnExpandsPatientInformation()
    await demogrphics.ClickOnExpandsPatientIdentifier()
    await demogrphics.ClickOnExpandsPatientIdentifier()
    await demogrphics.ClickOnExpandsPatientAddress()
    await demogrphics.ClickOnExpandsPatientAddress()
    await demogrphics.ClickOnExpandsPatientPIP()
    await demogrphics.ClickOnExpandsPatientPIP()
    await demogrphics.ClickOnExpandsPatientGP()
    await demogrphics.ClickOnExpandsPatientGP()

    //await page.pause()
    await demogrphics.SelectRadioButtonForConsentForPhotographcsNo()
    await demogrphics.SelectRadioButtonForConsentForPhotographcsYes()
    await demogrphics.ClickSaveButtonForConsentForPhotographcs()


    await topbluebar.clickOnTopBlueBar()
    //await page.pause()
    await page.waitForTimeout(3000)
    await editpatient.clickOnPatientDetails()
    await editpatient.clickOnPatientAddress() 
    await editpatient.clickOnPatientDetails()
   // await page.pause()
      
    
    // await expect(page.getByText('Sex required')).toHaveText('Sex required')
    // await expect(page.getByText('Ethnicity required')).toHaveText('Ethnicity required')
    // await expect(page.getByText('Religion required')).toHaveText('Religion required')

    await editpatient.selectSexualOrientation()
    await editpatient.selectCurrentlyPrgenant()
    //await editpatient.selectSexDropdown()
    await editpatient.selectEthnicityDropdown()
    await editpatient.selectReligionDropdown()
    //await editpatient.selectPrimaryDisablity()
    await editpatient.selectPrisoner()
    
    await editpatient.clickOnSaveForPatientDetails()
    await expect(page.getByText('Patient updated successfully')).toHaveText('Patient updated successfully')
    //await page.pause()
    await editpatient.clickOnPatientAddress()   
    await editpatient.clickOnSaveForPatientDetails() 
   // await expect(page.getByText('Patient address added successfully')).toHaveText('Patient address added successfully')
    await editpatient.clickOnPatientPIP()    
    await page.pause()
    await editpatient.enterIntoSearchGP('Wednesday')

    await editpatient.clickOnViewPIPLink()

    await page.waitForTimeout(2000)
    await editpatient.clickOnClosePIPAddressPopup() 
    await editpatient.clickOnExportListbtn()    
    //await editpatient.clickOnViewforInterestedPartyList()
    await page.waitForTimeout(2000)
   // await editpatient.clickOnAddressPIP()
    //await page.pause()
    await editpatient.clickOnExportToCSVLink()
    await page.waitForTimeout(1000)
    await editpatient.clickOnExportToExcelLink()
    await page.waitForTimeout(1000)
    await editpatient.clickOnExportToXMLLink()
    await page.waitForTimeout(1000)
    await editpatient.clickOnExportToPDFLink()
    await page.waitForTimeout(1000)
    await editpatient.clickOnCloseInterestedPartyPopup()
    


    await editpatient.clickOnPatientGP()
    
    await editpatient.clickOnPrintIdCard()
    
    //await page.pause()



})
