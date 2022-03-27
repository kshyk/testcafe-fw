import { Selector } from 'testcafe';

fixture`Okruszek`.page`http://www.okruszek.org.pl`;

test('Click on bread should donate people', async (t) => {
  const breadButton = Selector('.click-crumb');
  const thanks = Selector('section#thanks');
  await t.click(breadButton).expect(thanks.visible).ok();
});
