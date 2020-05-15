const chai = require('chai');
const expect = chai.expect;
const {addStep} = require('@wdio/allure-reporter').default;


describe("Test Beeline Shop", () =>{
  it("Данные", () => {
    addEnvironment('First/Last name', 'Vinnikov Evgeniy');
    addEnvironment('browserName', 'Chrome');
    addEnvironment('browserVersion', 'Версия 80.0.3987.132 (Официальная сборка), snap (64 бит)');
    addEnvironment('OS', 'Ubuntu 18.04 LTS x64');
  });

  it('Вход на главную', () => {
    addStep('Открытие страницы по ссылке');
    browser.url('https://moskva.beeline.ru/shop/');
    addStep('Cверяем заголовок страницы');
    let title = browser.getTitle();
    expect(title).to.equal('Интернет-магазин Билайн Москва - продажа сотовых телефонов, смартфонов и аксессуаров');
  });

  it('Кликаем по ссылке "телефоны"', () => {
    addStep('Кликаем на ссылку "телефоны"');
    $('a[href="/shop/catalog/telefony/"]').click();
    title=browser.getTitle();
    addStep('Cверяем заголовок страницы');
    expect(title).to.equal('Смартфоны — купить смартфон, цены на телефоны в интернет-магазине Билайн Москва');
  });

  it('Клик по чекбоксу', () => {
    $("//div[./span[text()='Производитель']]/following-sibling::*[contains(@class,'ShowAllButton')]").click();
    $('//input[@id=\'checkbox__proizvoditel_proizvoditel-xiaomi\']').click();
    $('div[class*="ProductCard_header"] a').waitForDisplayed(20000);
    let phoneNames = $$('div[class*="ProductCard_header"] a');
    expect(phoneNames[0].getText()).to.contains('Xiaomi');
  });
  it('Сортировка цен', () => {
      addStep('Вводим цену в первый инпут');
      let priceSort = $$("div[class*='RangeFilter'] input");
      addStep('Вводим цену в первый инпут');
      priceSort[0].setValue('10000');
      addStep('Нажимаем Enter');
      browser.keys('Enter');
      addStep('Вводим цену во второй инпут');
      priceSort[1].setValue('30000');
      addStep('Нажимаем Enter');
      browser.keys('Enter');
      addStep('Ожидаем загрузки карточек товаров');
      $("//div[contains(@class,'ProductCard_header') and contains(string(), 'Xiaomi')]").waitForDisplayed(10000);
      addStep('Сравниваем карточку товара с нужным производителем');
      let phone = $("//div[contains(@class,'ProductCard_header') and contains(string(), 'Xiaomi')]");
      expect(phone.getText()).to.contains('Xiaomi');
  });

  it('Выбираем телефон', () => {
    addStep('Кликаем по карточке из середины');
    let buttonCard = $$("button[class*='ReactiveButton'] span");
    buttonCard[12].click();
    addStep('Ждем загрущки корзины и сравниваем товар из карточки и выбранный нами');
    $('h3 a').waitForDisplayed(15000)
    let cards = $('h3 a');
    expect(cards.getText()).to.contains('Xiaomi');
  });
});