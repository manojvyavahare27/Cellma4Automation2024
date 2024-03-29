const axios = require('axios');
import {test, chromium } from '@playwright/test';
import { request } from 'http';
 
test('Sample test',async () => {
  const browser = await chromium.launch(); 

  const context = await browser.newContext();
  const page = await context.newPage();


  
  // Intercept network requests
await page.route('**/*', (route) => {
  if (route.request().resourceType() === 'xhr' && route.request().url().includes('https://api.testcellma.com/cellmaUserAPI'))
   {
      console.log('Request URL:', route.request().url());
      console.log('Request Method:', route.request().method());
      console.log('Request PostData:', route.request().headers().body);        
      } 
  else 
  {
      route.continue(); // Continue with the intercepted request
  }
});

await page.goto('https://testcellma.com/cellmaUser/login'); 
page.on('response',async response => {
  console.log('Response Monitoring')   
   console.log('<<', response.request().url, re
   .status());   
   console.log('<<', response.request().url, response.body());
 
   });

  // Fill in the login form
  await page.fill('input[name="username"]', 'prerelease.auto');
  await page.fill('input[name="password"]', 'Manoj@2023');
  // Click the submit button to trigger the POST request
  await page.click('button[type="submit"]'); 

  


  // // Get the response details after submitting the form (you may need to adjust the selector)
  // const postApiResponse = await page.waitForResponse(response => response.url().includes('http://10.0.0.64:8080/cellmaUserAPI/user/header'));
  // //await page.pause()
  // // Extract the login token from the POST response
  // const loginToken = await postApiResponse.json();
  // const jwtToken = loginToken.jwt;
  // //console.log(jwtToken)
  // await page.pause()
  // console.log(loginToken)
  // console.log(jwtToken)

  
  // // Now, make subsequent GET requests and include the login token in the headers
  // const getApiUrl1 = 'http://10.0.0.64:8080/cellmaUserAPI/user/header';
  // const getApiUrl2 = 'http://10.0.0.64:8080/cellmaUserAPI/user/home';
 
  // const getApiResponse1 = await axios.get(getApiUrl1, { headers: { Authorization: `Bearer ${jwtToken}` } });
  // //const getApiResponse2 = await axios.get(getApiUrl2, { headers: { Authorization: `Bearer ${jwtToken}` } });
 
  // // Perform assertions on the GET API responses
  // //console.log('GET API Response 1:', getApiResponse1.data);
  // //console.log('GET API Response 2:', getApiResponse2.data);
  
  await browser.close();
});