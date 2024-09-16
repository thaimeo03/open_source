const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const { describe, it, beforeEach, afterEach } = require('mocha');

describe('Login feature', function () {
  let driver;

  // Initialize the session
  beforeEach(async () => {
    // Start the session
    driver = await new Builder().forBrowser('chrome').build();

    // Take action on browser
    await driver.get('https://blog-btl-client.vercel.app');

    // Establish waiting strategy
    await driver.manage().setTimeouts({ implicit: 4000 });
  });
  
  afterEach(async () => {
    // End the session
    await driver.quit();
  });
  // End the session
  
  // Test cases
  it('Should redirect to login page if not logged in', async () => {
    await driver.wait(until.urlContains('/login'), 4000);
    const url = await driver.getCurrentUrl();
    assert(url.includes('/login'), 'User was not redirected to the login page');
  });

  it('Should show error message if login fails with invalid email format', async () => {
    const data = require('../../fixtures/login.json');
    const invalidEmailFormat = data.invalidEmailFormat;

    await driver.findElement(By.name('email')).sendKeys(invalidEmailFormat.email);
    await driver.findElement(By.name('password')).sendKeys(invalidEmailFormat.password);
    await driver.findElement(By.css('button[type="submit"]')).click();

    const url = await driver.getCurrentUrl();
    assert(url.includes('/login'), 'Page did not remain on the login page');
  });

  it('Should show error message if login fails with invalid password format', async () => {
    const data = require('../../fixtures/login.json');
    const invalidPasswordFormat = data.invalidPasswordFormat;

    await driver.findElement(By.name('email')).sendKeys(invalidPasswordFormat.email);
    await driver.findElement(By.name('password')).sendKeys(invalidPasswordFormat.password);
    await driver.findElement(By.css('button[type="submit"]')).click();

    const url = await driver.getCurrentUrl();
    assert(url.includes('/login'), 'Page did not remain on the login page');
  });

  it('Should show error message if login fails with invalid credentials', async () => {
    const data = require('../../fixtures/login.json');
    const invalidUser = data.invalidUser;

    await driver.findElement(By.name('email')).sendKeys(invalidUser.email);
    await driver.findElement(By.name('password')).sendKeys(invalidUser.password);
    await driver.findElement(By.css('button[type="submit"]')).click();

    const url = await driver.getCurrentUrl();
    assert(url.includes('/login'), 'Page did not remain on the login page');
    
    const errorElement = await driver.wait(until.elementLocated(By.css('.group')));
    assert(await errorElement.isDisplayed(), 'Error message was not visible');
  });

  it('Should redirect to home page if login is successful', async () => {
    const data = require('../../fixtures/login.json');
    const validUser = data.validUser;

    await driver.findElement(By.name('email')).sendKeys(validUser.email);
    await driver.findElement(By.name('password')).sendKeys(validUser.password);
    await driver.findElement(By.css('button[type="submit"]')).click();

    await driver.wait(until.urlIs('https://blog-btl-client.vercel.app/'), 4000);
    const url = await driver.getCurrentUrl();

    assert(!url.includes('/login'), 'User was not redirected to the home page');
    assert(url.includes('/'), 'User was not redirected to the correct home page');
  });
});
