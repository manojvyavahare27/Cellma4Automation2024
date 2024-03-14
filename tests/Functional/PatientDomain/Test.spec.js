import { test, expect, Page, chromium } from '@playwright/test';
import { promises } from 'dns';
import { json } from 'stream/consumers';

//import { test } from "@playwright/test";

test("Read API response", async ({ page }) => {
    //await page.goto("http://10.0.0.64:3000/cellmaUser/login");
    const [response] = await Promise.all([
        page.waitForResponse(res =>
            res.status() == 200
            &&
            res.url() == "http://10.0.0.64:8080/cellmaUserAPI/login/display"            
        ),
        await page.goto('http://10.0.0.64:3000/cellmaUser/login'),
        // Fill in the login form
        await page.fill('input[name="username"]', 'prerelease.auto'),
        await page.fill('input[name="password"]', 'Manoj@2023'),
        await page.click('button[type="submit"]')
    ])
    console.log(response);
})