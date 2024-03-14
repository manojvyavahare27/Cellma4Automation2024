const { chromium, expect } = require('@playwright/test')
const fs = require('fs');
const { config } = require('process');

const XLSX = require('xlsx');
const path = 'C:/Riomed/Cellma4Automation'

module.exports = async config => {

  const browser=await chromium.launch({headless:false})
  const page=await browser.newPage()

//Excel to JSON Convertor
  const workbook = XLSX.readFile('./ExcelFiles/PatientDomain.xlsx');
  const jsonData = {};
  workbook.SheetNames.forEach(sheetName => {
    const worksheet = workbook.Sheets[sheetName];
    jsonData[sheetName] = XLSX.utils.sheet_to_json(worksheet);
    fs.writeFileSync(path + '/TestDataWithJSON/PatientDomain/PatientDetails.json', JSON.stringify(jsonData, null, 2));
  });
  console.log('Excel data has been converted and saved to excel_data.json');
await browser.close()


  ///////////////////////////////////////////////////////
  //   await page.goto('http://10.0.0.64:3000/cellmaUser/login')
  //   await page.getByRole('textbox', { name: 'Username' }).fill('prerelease.auto')
  //   await page.getByRole('textbox', { name: 'Password' }).fill('Manoj@2023')
  //   await page.getByTestId('Login').click()
  //   //await page.waitForNavigation();
  //  //await page.pause()
  //   // await page.context().storageState({path:"Shree.json"})
  //   const LoginPageAPIResponse = await page.waitForResponse(response => response.url().includes('http://10.0.0.64:8080/cellmaUserAPI/user/login'), 0);
  //   const Logindata = await LoginPageAPIResponse.json();
  //   fs.writeFile('./Shree.json', JSON.stringify(Logindata, null, 2), (err) => {
  //     if (err) {
  //       console.error('Error writing JSON file:', err);
  //       return;
  //     }
  //     console.log('JSON response saved to File');
  //   });    
  }

