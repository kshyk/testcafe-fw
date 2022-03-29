import page from '../pageobjects/pajacyk/home-page';

fixture`Pajacyk`.page`https://www.pajacyk.pl/#index`;

test('Click on belly should donate kids', async (t) => {
  await t.click(page.bellyButton).expect(page.thanks.visible).ok();
});
