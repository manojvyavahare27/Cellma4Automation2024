const fs = require('fs');
const XLSX = require('xlsx');
const path = 'C:/Riomed/Cellma4Automation'

import { test, expect, Page, chromium } from '@playwright/test';
//let jsonData = {};
const { mysqlQueryFunction } = require('../../../db');

import LoginPage from '../../../Pages/BaseClasses/LoginPage';
import Homepage from '../../../Pages/BaseClasses/Homepage';
import PatientSearch from '../../../Pages/PatientDomain/PatientSearch';
import PatientDetails from '../../../Pages/PatientDomain/PatientDetails'
import Environment from '../../../Pages/BaseClasses/Environment';
import Menu from '../../../Pages/BaseClasses/Menu';
import PatientWizard from '../../../Pages/PatientDomain/PatientWizard';
import PatientDuplicateCheck from '../../../Pages/PatientDomain/PatientDuplicateCheck';
//import PatientWizard from '../../Pages/PatientWizard';
//import PatientWizard from '../../Pages/PatientWizard';
import AddPatient from '../../../Pages/PatientDomain/AddPatient';
import AddAddress from '../../../Pages/PatientDomain/AddAddress';
import AddPIP from '../../../Pages/PatientDomain/AddPIP';
import ViewPIP from '../../../Pages/PatientDomain/ViewPIP';
import AddGP from '../../../Pages/PatientDomain/AddGP';
import PrintIDCard from '../../../Pages/PatientDomain/PrintIDCard'
//import Pool from 'mysql/lib/Pool';

const logindata = JSON.parse(JSON.stringify(require("../../../TestData/PatientDomain/Login.json")))
const patientdetailsdata = JSON.parse(JSON.stringify(require("../../../TestData/PatientDomain/PatientDetails.json")))
const pipdetailsdata = JSON.parse(JSON.stringify(require("../../../TestData/PatientDomain/PIPDetails.json")))
const gpdata = JSON.parse(JSON.stringify(require("../../../TestData/PatientDomain/NewGPDetails.json")))

const jsonArray = JSON.parse(JSON.stringify(require("../../../TestDataWithJSON/ExcelToJSON.json")))
//const jsonArray =JSON.parse("../../../TestDataWithJSON/ExcelToJSON.json");
console.log(jsonArray)


 test.describe('Login Tests', () => {    

   jsonArray.SearchPatient.forEach((data, index) => { 
      test(`Register New Patient ${data.pat_firstname}`, async({ page }) => { 
      const loginpage = new LoginPage(page)
      const homepage = new Homepage(page)
      const environment = new Environment(page)
      const patientsearch = new PatientSearch(page)
      const patientduplicatecheck = new PatientDuplicateCheck(page)
      const addpatient = new AddPatient(page)
      const addaddress = new AddAddress(page)
      const addpip = new AddPIP(page)
      const viewpip = new ViewPIP(page)
      const addgp = new AddGP(page)
     const printidcard = new PrintIDCard(page)
     const menu = new Menu(page)
  await page.goto(environment.Test)
  await loginpage.enterUsername(logindata.username)
  await loginpage.enter_Password(logindata.password)
  await loginpage.clickOnLogin()
  console.log("Login Successfully")
  await homepage.clickOnPatientIcon()
  await patientsearch.clickOnSearchButton()
  await patientsearch.enterGivenName(data.pat_firstname)
  await patientsearch.enterFamilyName(data.pat_lastname)
  await patientsearch.selectSex(data.pat_sex)  
  await patientsearch.selectBornDate(data.pat_dob)
  await patientsearch.clickOnSearchButton()
  await patientsearch.clickOnAddPatientbutton()
  await patientduplicatecheck.clickOnDuplicateCheckButton()
  await expect(page.getByText('Photo Identification required')).toHaveText('Photo Identification required')
  await expect(page.getByText('Photo Identification ID required')).toHaveText('Photo Identification ID required')
  await expect(page.getByText('Middle name(s) is required')).toHaveText('Middle name(s) is required')
  await expect(page.getByText('Baby born in this hospital required')).toHaveText('Baby born in this hospital required')
  await patientduplicatecheck.selectUniqueIdentification()
  await patientduplicatecheck.enterUniqueIdentificationId(patientdetailsdata.UniqueIdentificationId)
  await patientduplicatecheck.selectPhotoIdentification()
  await patientduplicatecheck.enterPhotoIdentification(patientdetailsdata.PhotoIdentificationId)
  await patientduplicatecheck.selectIssuingCountry()
  await patientduplicatecheck.selectTitle()
  await patientduplicatecheck.enterMiddleName(data.pat_middlename)
  await patientduplicatecheck.enterMaidenName(patientdetailsdata.MaidenName)
  //await page.pause()
  //Is baby born in hospital

  await patientduplicatecheck.selectIsBabyBornInHospital()
  await patientduplicatecheck.enterMobileNumber(data.pat_mobile.toString())
  await patientduplicatecheck.enterEmailId(data.pat_email)
  await patientduplicatecheck.clickOnDuplicateCheckButton()
  //await expect(page.getByText('Duplicate Patients not found')).toHaveText('Duplicate Patients not found')   
  await patientduplicatecheck.clickOnCreatePatientButton()

  //Patient Wizard- Add Patient
  // await patientwizard.select_MaritalStatus()
  // await patientwizard.select_SexualOrientation()
  await addpatient.selectMaritalStatusDropdown()
  await addpatient.selectSexualOrientation()
  await addpatient.selectEthnicity()
  await addpatient.selectOccupation()
  await addpatient.SelectReligion()
  await addpatient.enterTownOfBirth(patientdetailsdata.TownOfBirth)
  await addpatient.enterCountyOfBirth("Maharashtra")
  await addpatient.selectCountryOfBirth()
  await addpatient.selectNationality()
  await addpatient.selectRegDisable()
  //
  //await addpatient.selectPrimaryDisablity()
  await addpatient.enterAssestanceNeeded(patientdetailsdata.AssistanceNeeded)
  await addpatient.enterDisablityNotes(patientdetailsdata.DisablityNotes)
  await addpatient.selectLanguage()
  //await page.pause()
  //await page.pause()
  await addpatient.selectInterpreterNeeded()
  await addpatient.selectInterpreterType()
  await addpatient.enterNHSNo(patientdetailsdata.NHSNo)
  await addpatient.enterHospitalRef(patientdetailsdata.HospitalRef)
  await addpatient.enterIdentifier(patientdetailsdata.Identifier)
  await addpatient.enterPASId(patientdetailsdata.PASId)
  await addpatient.selectPatientType()
  await addpatient.selectPrisoner()
  await addpatient.selectBloodType()
  await addpatient.selectRestrictedRegistration()
  await addpatient.selectPatientWebRegistration()
  await addpatient.enterNotes()
  await addpatient.clickOnNextButton()

  //Add Address page    
  await addaddress.clickOnSaveButton()
  await page.pause()
  await addaddress.enterNumberAndRoad(jsonArray.AddAddress[index].add_address1)
  //await addaddress.enterNumberAndRoad(patientdetailsdata.NumberandRoad)
  await addaddress.enterTown(patientdetailsdata.Town)
  await addaddress.enterDestrict(patientdetailsdata.Destrict)
  await addaddress.enterCounty(patientdetailsdata.County)
  await addaddress.enterPostCode(patientdetailsdata.PostCode)

  await addaddress.clickOnFindPostCode()
  await addaddress.enterCountryonPopup()
  await addaddress.clickOnSaveButtonOnPopup()

  //Permanent Address
  // await page.pause()
  await addaddress.enterPermISOCountryCode()
  await addaddress.enterPermICAOCode()
  await addaddress.enterPremPhone()
  await addaddress.enterPermEmail()
  await addaddress.enterPermWorkPhone()
  await addaddress.enterPermFax()

  await addaddress.selectPermHealthRegion()
  await addaddress.selectPermLocationZone()
  await addaddress.clickOnPermAddressAddViewBnt()
  await addaddress.enterPermAddresNotes()


  //Temporary Address
  // await page.pause()
  await addaddress.enterTempNumberandRoad()
  await addaddress.enterTempTown()
  await addaddress.enterTempDistrict()
  await addaddress.enterTempCounty()
  await addaddress.enterTempPostcode()
  await addaddress.enterTempISOCountryCode()
  await addaddress.enterTempICAOCountryCode()
  //await page.pause()
  await addaddress.enterTempPhone(patientdetailsdata.MobileNumber)
  await addaddress.enterTempEmail(patientdetailsdata.EmailId)
  await addaddress.enterTempWorkPhone(patientdetailsdata.WorkPhone)
  await addaddress.enterTempFax(patientdetailsdata.Fax)
  await addaddress.selectTempHealthRegion()
  await addaddress.selectTempLocationZone()
  await addaddress.clickOnTempAddressAddViewBnt()
  await addaddress.enterTempAddresNotes()
  await addaddress.clickOnTempAddressAddViewBnt()
  await addaddress.closeTempAddressNotesPopup()

  //Billing Corrospondance
  await addaddress.CheckRadiobtnBilllingCorrespondence()
  await addaddress.SelectStartEndDate()
  //await page.pause()
  await addaddress.clickOnSaveAddress()
  await page.waitForTimeout(2000)
  //await expect(page.getByText('Patient address added successfully')).toHaveText('Patient address added successfully')

  //Add PIP
  //await page.pause()
  await addpip.selectPIPTitle()
  await addpip.enterPIPFamilyName(pipdetailsdata.FamilyName)
  await addpip.enterPIPGivenName(pipdetailsdata.GivenName)
  await addpip.enterPIPMiddleName(pipdetailsdata.MiddleName)
  await addpip.selectPIPBornDate()
  //await page.pause()
  await addpip.selecrPIPEthnicity()
  await addpip.selectPIPOccupation()
  await addpip.enterPIPMobileNumber(pipdetailsdata.MobileNo)
  await addpip.enterPIPEmailId(pipdetailsdata.Email)
  await addpip.selectPIPRelation()
  await addpip.selectPIPNextOfKin()
  await addpip.SelectPIPFamilyAwareOfIllness()
  //await page.pause()
  //await addpip.selectPIPIdentifierType()
  // await addpip.enterPIPIdentifier()
  await addpip.enterExternalProfessional(pipdetailsdata.ExternalProfessional)
  //await page.pause() 
  await addpip.enterProfessionalTitle(pipdetailsdata.PIPTitle)
  await addpip.selectPIPReceivePatientLetter()
  await addpip.selectPIPReceiveAppointmentLetter()
  await addpip.selectPIPPartnerDetailsOnRegForm()
  await addpip.checkSendPatientTextEmail()
  await addpip.checkIsReferrer()
  await addpip.enterPIPNotes()
  //await page.pause()
  await addpip.checkcAssistingInPartner()
  await addpip.checkHelpingPatients()
  await addpip.checkBeingPhotographed()
  await addpip.checkGeneralPublicity()
  await addpip.ClickOnSavePIP()
  await expect(page.getByText('Patient interested party details added successfully')).toHaveText('Patient interested party details added successfully')

  //View PIP
  //await page.pause()
  await viewpip.clickOnViewPIPLink()
  await viewpip.clickOnCloseViewPopup()
  await viewpip.clickOnNextbntViewPIP()

  //Search GP
  await addgp.clickOnSearchGPBtn()
  await addgp.enterGpSearch()
  //await page.pause()
  //await expect(page.getByText('Local GP found')).toHaveText('Local GP found')

  await addgp.clickOnAddGPBtn()

  // Add GP
  await addgp.enterGPTitle(gpdata.GPTitle)
  await addgp.enterGPInitials(gpdata.GPInitial)
  await addgp.enterGPGivenName(gpdata.GPGivenName)
  await addgp.enterGPFamilyName(gpdata.GPFamilyName)
  await addgp.enterGPCode(gpdata.GPCode)
  await addgp.enterGPPracticeCode(gpdata.GPPracticeCode)
  await addgp.enterGPGMCCode(gpdata.GPGMCCode)
  await addgp.clickOnShowbnt()
  await addgp.selectUnknownPostCode()
  await addgp.enterGPPhone(gpdata.GPPhone)
  await addgp.enterGPFax(gpdata.GPFax)
  await addgp.enterGPWorkPhone(gpdata.GPWorkPhone)
  await addgp.enterGPMobile(gpdata.GPMobile)
  await addgp.enterGPEmail(gpdata.GPEmail)

  await addgp.clickOnSaveGPButton()
  //await expect(page.getByText('GP Added Successfully')).toHaveText('GP Added Successfully')
  // await page.pause()
  await addgp.enterAppGpSearch()
  // Add GP To Patient     
  await addgp.clickOnPersonAddButton()
  await addgp.clickOnNextButtonOnSearchGp()
  await page.waitForTimeout(3000)

  // Print Id Card    
  // Get the upload input element
  const fileInput = await page.$('input[type=file]');
  // Set the file to upload
  const filePath = '../Cellma4Automation/UploadPics/Patient.png';
  // Upload the file
  await fileInput.setInputFiles(filePath);
  await page.getByTestId('Upload').click()
  //await expect(page.getByText('Patient photo uploaded successfully')).toHaveText('Patient photo uploaded successfully')
  await printidcard.clickOnSavebtn()
  await page.waitForTimeout(2000)
  await menu.clickOnMenubtn()
  await menu.clickOnLogout()
  
      })
    });
// })();
// test('Run DB query',async()=>{
//   const mysql = require('mysql');
//   const fs = require('fs');
//  // jsonData.SearchPatient
//   //const MySqlQuery = 'SELECT * FROM patients where pat_firstname="AutomationB" && pat_surname="Riomedtest"';
//   const MySqlQuery = "SELECT * FROM patients where pat_firstname='Pratibha' && pat_surname='riomedtest'";
//   //console.log(sqlQuery)

//   const result = mysqlQueryFunction(MySqlQuery);
//   const jsonData = JSON.stringify(result);
//         fs.writeFile('../../Riomed/Cellma4Automation/TestData/AppointmentDomain/SearchPatientDetailsQueryResult1.json', jsonData, 'utf8', (err) => {
//       if (err) {
//         console.error('Error writing JSON data to file:', err);
//         return;
//       }
//       console.log('Query results written to query_results.json');
//     });

//   console.log(result);  
//   });

});

