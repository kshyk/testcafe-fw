import page from '../pageobjects/okruszek/home-page';

fixture`Okruszek`.page`http://www.okruszek.org.pl`.disablePageReloads;

test('Click on bread should donate', async () => {
  await page.clickOnBread();
  await page.isThanksVisible();
});
