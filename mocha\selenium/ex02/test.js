require("chromedriver");
const {Builder, By, until} = require("selenium-webdriver");
const assert = require("assert");

describe("Testing Beeline Shop - поиск телефона", () => {
  before( async function() {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://moskva.beeline.ru/shop');
  });

  it( "Поиск вкладки 'Телефоны'", async () => {
    let categoryPhone = await driver.wait(until.elementLocated(By.tagName("a[href='/shop/catalog/telefony/']")), 20000);
    await categoryPhone.click();
    let title = await driver.getTitle();
    assert.equal(title, "Смартфоны — купить смартфон, цены на телефоны в интернет-магазине Билайн Москва");
  });

  it("Открытие \'Показать все\'", async () => {
    let showAll = await driver.wait(until.elementLocated(By.xpath("//div[./span[text()='Производитель']]/following-sibling::*[contains(@class,'ShowAllButton')]")), 10000);
    let title = await showAll.getText();
    await showAll.click();
    assert.equal(title, 'Показать все');
  });

  it("Кликаем по checkbox", async function () {
    await driver.wait(until.elementLocated(By.css("div[class*='FiltersOption_container'] input[type='checkbox'][name*='vivo']")), 10000).click();
    await driver.wait(until.elementIsSelected(driver.findElement(By.css("div[class*='FiltersOption_container'] input[type='checkbox'][name*='vivo']"))), 10000);
});

  after(() => {
    driver.quit();
  });
});