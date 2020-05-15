require("chromedriver");
const {Builder, Key, By, until} = require("selenium-webdriver");
const assert = require("assert");

describe("checkout google", () =>{
    before(async function(){
        driver = await new Builder().forBrowser('chrome').build();
    });

    it("Поиск в Гугл: значение которого", async () => {
    await driver.get("https://google.com");
    await driver.findElement(By.xpath("//input[@name='q']")).click();
    await driver.findElement(By.xpath("//input[@name='q']")).sendKeys('Sapiens', Key.RETURN);
    await driver.wait(until.elementsLocated(By.id('rcnt')), 10000);
    let title =await driver.getTitle();
    assert(title, "Sapiens - Поиск в Google");
    });

    after(() => {
        driver.quit();
    });
});