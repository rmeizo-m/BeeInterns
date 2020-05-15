const chai = require('chai');
const expect = chai.expect;

const {addStep} = require('@wdio/allure-reporter').default;
const {addEnvironment} = require('@wdio/allure-reporter').default;

describe("Test Beeline Shop", () =>{
  it("Данные", () => {
    addEnvironment('First/Last name', 'Vinnikov Evgeniy');
    addEnvironment('browserName', 'Chrome');
    addEnvironment('browserVersion', 'Версия 80.0.3987.132 (Официальная сборка), snap (64 бит)');
    addEnvironment('OS', 'Ubuntu 18.04 LTS x64');
  });

  it('step 1', () =>{
    addStep('Открытие страницы по ссылке');
    browser.url('https://moskva.beeline.ru/shop/');
    addStep('Cверяем заголовок страницы');
    let title = browser.getTitle();
    expect(title).to.equal('Интернет-магазин Билайн Москва - продажа сотовых телефонов, смартфонов и аксессуаров');
  });

  it('step 2 - click or anker telephone', () => {
    addStep('Кликаем на ссылку "телефоны"');
    $('a[href="/shop/catalog/telefony/"]').click();
    title=browser.getTitle();
    addStep('Cверяем заголовок страницы');
    expect(title).to.equal('Смартфоны — купить смартфон, цены на телефоны в интернет-магазине Билайн Москва');
  });

  it('step 3 - show all and click or checkbox', () =>{
    addStep('Кликаем по кнопке "Показать все"');
    $("//div[./span[text()='Производитель']]/following-sibling::div/span").click();
    addStep('Кликаем по чекбоксу Apple');
    $('//input[@id=\'checkbox__proizvoditel_proizvoditel-apple\']').click();
    addStep('ожидаем загрузку карточек товаров');
    $('div[class*="ProductCard_header"] a').waitForDisplayed(20000);
    addStep('Выбираем первую карточку и сравниваем производителя');
    let phoneNames = $$('div[class*="ProductCard_header"] a');
    expect(phoneNames[0].getText()).to.contain('Apple');
  });
});