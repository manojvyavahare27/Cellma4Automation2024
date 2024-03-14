import { test, expect, Page, chromium } from '@playwright/test';
import { json } from 'stream/consumers';

test("Read API response", async ({ page }) => {
    await page.goto("https://testcellma.com/cellmaUser/login");
    
        // Fill in the login form
        await page.fill('input[name="username"]', 'trainer.sathya'),
        await page.fill('input[name="password"]', 'Welcome@123'),
        await page.click('button[type="submit"]')


       // await page.waitForTimeout(2000)
        let [response] = await Promise.allSettled([
            page.waitForResponse(async res =>{
               res.status() == 200
            //     &&  res.url().includes("http://10.0.0.64:8080/cellmaUserAPI/") )
            //     {
                // await page.waitForTimeout(10000)
                console.log('Request URL:',res.url())
               const res = await res.body()
              // count++
              // return res
              //  }                
            }                // res.url()                
            )            
    ])

    console.log(response.json())

})