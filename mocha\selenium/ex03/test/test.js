const chai = require('chai');
const expect = chai.expect;

describe("Test Beeline Shop", () =>{
it('step 1', function(){
browser.url('https://moskva.beeline.ru/shop/');
let title = browser.getTitle();
expect(title).to.equal('Интернет-магазин Билайн Москва - продажа сотовых телефонов, смартфонов и аксессуаров');
});
it('step 2 - click or anker telephone', function(){
$('a[href="/shop/catalog/telefony/"]').click();
title=browser.getTitle();
expect(title).to.equal('Смартфоны — купить смартфон, цены на телефоны в интернет-магазине Билайн Москва');
});

it('step 3 - show all and click or checkbox', function(){
$("//div[./span[text()='Производитель']]/following-sibling::div/span").click();
$('//input[@id=\'checkbox__proizvoditel_proizvoditel-xiaomi\']').click();
$('div[class*="ProductCard_header"] a').waitForDisplayed(15000);
let phoneNames = $$('div[class*="ProductCard_header"] a');
expect(phoneNames[0].getText()).to.contain('Xiaomi');
});
});

