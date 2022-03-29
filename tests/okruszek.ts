import page from '../pageobjects/okruszek/home-page';

fixture`Okruszek`.page`http://www.okruszek.org.pl`;

test('Click on bread should donate people', async (t) => {
  await t.click(page.breadButton).expect(page.thanks.visible).ok();
});
