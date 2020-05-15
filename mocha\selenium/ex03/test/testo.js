const chai = require('chai');
const expect = chai.expect;


describe("Test Beeline Shop", () =>{
  it('Вход на главную',function(){
    browser.url('https://moskva.beeline.ru/shop/');
    let title = browser.getTitle();
    expect(title).to.equal('Интернет-магазин Билайн Москва - продажа сотовых телефонов, смартфонов и аксессуаров');
  });
  it('should successfull open phone page', function(){
    $('//span[text()=\'телефоны\']').click();
    title=browser.getTitle();
    expect(title).to.equal('Смартфоны — купить смартфон, цены на телефоны в интернет-магазине Билайн Москва');
  });

  it('Клик по чекбоксу', function(){
    $("//div[./span[text()='Производитель']]/following-sibling::*[contains(@class,'ShowAllButton')]").click();
    $('//input[@id=\'checkbox__proizvoditel_proizvoditel-xiaomi\']').click();
    $('div[class*="ProductCard_header"] a').waitForDisplayed(10000);
    let phoneNames = $$('div[class*="ProductCard_header"] a');
    expect(phoneNames[0].getText()).to.contains('Смартфон Xiaomi Redmi 7A EU 16GB Matte Blue');
  });
  it('Сортировка цен', function(){
      let priceSort = $$("div[class*='RangeFilter'] input");
      priceSort[0].setValue('10000');
      browser.keys('Enter');
      priceSort[1].setValue('30000');
      browser.keys('Enter');
      $("//div[contains(@class,'ProductCard_header') and contains(string(), 'Xiaomi')]").waitForDisplayed(10000);
      let phone = $("//div[contains(@class,'ProductCard_header') and contains(string(), 'Xiaomi')]");
      expect(phone.getText()).to.contains('Смартфон Xiaomi Mi 9T 64GB Blue');
  });

  it('Выбираем телефон', function(){
    let buttonCard = $$("button[class*='ReactiveButton'] span");
    buttonCard[12].click();
    $('h3 a').waitForDisplayed(15000)
    let cards = $('h3 a');
    expect(cards.getText()).to.contains('Смартфон Xiaomi Mi A3 64GB Gray');
  });
});
