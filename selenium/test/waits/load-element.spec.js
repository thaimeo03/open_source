const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const { beforeEach, afterEach } = require('mocha');

describe('Should wait email, password input visible and click submit', () => {
  let driver;

  beforeEach(async () => {
    // Start the session
    driver = await new Builder().forBrowser('chrome').build();

    // Take action on browser
    await driver.get('http://127.0.0.1:5500/index.html');

    // Establish waiting strategy
    // await driver.manage().setTimeouts({ implicit: 4000 });
  });

  afterEach(async () => {
    await driver.quit();
  });

  it('Should wait for the submit button and click it', async () => {
    // Access to the website

    // Selenium needs explicit wait to wait for the element
    const emailInput = await driver.findElement(By.id('email'));
    await driver.wait(until.elementIsVisible(emailInput), 5000);
    await emailInput.sendKeys('selenium@gmail.com');

    const passwordInput = await driver.findElement(By.id('password'));
    await driver.wait(until.elementIsVisible(passwordInput), 5000);
    await passwordInput.sendKeys('selenium');

    const element1 = await driver.findElement(By.id('element_1'));
    await driver.wait(until.elementIsVisible(element1), 3000);
    assert(await element1.isDisplayed(), 'Element 1 was not visible');

    const element2 = await driver.findElement(By.id('element_2'));
    await driver.wait(until.elementIsVisible(element2), 3000);
    assert(await element2.isDisplayed(), 'Element 2 was not visible');

    const element3 = await driver.findElement(By.id('element_3'));
    await driver.wait(until.elementIsVisible(element3), 3000);
    assert(await element3.isDisplayed(), 'Element 3 was not visible');

    const element4 = await driver.findElement(By.id('element_4'));
    await driver.wait(until.elementIsVisible(element4), 3000);
    assert(await element4.isDisplayed(), 'Element 4 was not visible');

    const element5 = await driver.findElement(By.id('element_5'));
    await driver.wait(until.elementIsVisible(element5), 4000);
    assert(await element5.isDisplayed(), 'Element 5 was not visible');

    const element6 = await driver.findElement(By.id('element_6'));
    await driver.wait(until.elementIsVisible(element6), 3000);
    assert(await element6.isDisplayed(), 'Element 6 was not visible');

    // Check next page
    const submitButton = await driver.findElement(By.id('btn'));
    await driver.wait(until.elementIsVisible(submitButton), 5000);
    await submitButton.click();
    await driver.wait(until.urlContains('/page_1.html'), 5000);
    const url = await driver.getCurrentUrl();
    assert(url.includes('/page_1.html'), 'Must not be on the page_1.html page');
  });
});
