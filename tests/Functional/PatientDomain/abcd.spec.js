const axios = require('axios');
import {test, chromium } from '@playwright/test';
import { request } from 'http';
 
async function getFullfiledResponse(page)
{
  return page.waitForResponse(async(res)=>{
    if(res.url().includes('http://10.0.0.64:8080/cellmaUserAPI/user/login')){
      return false
    }
    const responseBody=await res.json()
    return responseBody.statusCode==="200"
  })
}
test('Sample test',async () => {
  const browser = await chromium.launch(); 
  const context = await browser.newContext();
  const page = await context.newPage();
  const responsePromis=getFullfiledResponse(page)  
  await page.goto('http://10.0.0.64:3000/cellmaUser/login')
  // Fill in the login form
  await page.fill('input[name="username"]', 'prerelease.auto');
  await page.fill('input[name="password"]', 'Manoj@2023');
  await page.click('button[type="submit"]'); 
  const response=await responsePromis
  const responseBody=await response.json()
  console.log(responseBody) 
});