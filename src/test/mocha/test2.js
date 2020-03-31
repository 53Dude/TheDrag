//Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Test2', function() {
	this.timeout(30000)
	let driver
	let vars
	beforeEach(async function() {
		driver = await new Builder().forBrowser('chrome').build()
		vars = {}
	})
	afterEach(async function() {
		await driver.quit();
	})
	it('Test2', async function() {
		assert.equal(0, 0);

		await driver.get("https://thedrag.appspot.com/html/home.html")
		await driver.manage().window().setRect(1936, 1066)
		await driver.findElement(By.css(".col-xl-2:nth-child(3)")).click()
		await driver.findElement(By.linkText("Dealer")).click()
		await driver.findElement(By.css(".page-item:nth-child(9) span:nth-child(1)")).click()
		await driver.findElement(By.css(".navbar-brand")).click()
		await driver.findElement(By.linkText("Car")).click()
		await driver.findElement(By.linkText("5")).click()
		await driver.findElement(By.css(".card:nth-child(3) .np-img-wrapper")).click()
		await driver.findElement(By.css(".offset-xl-2 > a:nth-child(1) .card-title")).click()
	})
})
