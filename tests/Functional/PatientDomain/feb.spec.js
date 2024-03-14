const axios = require('axios');
import {test,chromium} from '@playwright/test';

test('Sample test', async () => {
	const browser = await chromium.launch();
	const context = await browser.newContext();
	const page = await context.newPage();

	await page.goto("https://testcellma.com/cellmaUser/login");

	// verify response status | URL | Body
	const [response] = await Promise.all([
		page.waitForResponse(res =>
			res.status() === 200

		)
	]);

	// Fill in the login form
	await page.fill('input[name="username"]', 'trainer.sathya');
	await page.fill('input[name="password"]', 'Welcome@123');

	// Click the submit button to trigger the POST request
	await page.click('button[type="submit"]');

	// Wait for the response after clicking the submit button
	await page.waitForResponse(response => response.request().url().includes("https://api.testcellma.com/cellmaUserAPI/"));

	console.log(response.json());
});