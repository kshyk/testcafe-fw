import page from '../pageobjects/pajacyk/home-page';

fixture`Pajacyk`.page`https://www.pajacyk.pl/#index`;

test('Click on belly should donate kids', async () => {
  await page.clickOnBelly();
  await page.isThanksVisible();
});
