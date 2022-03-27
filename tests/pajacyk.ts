import { Selector } from 'testcafe';

fixture`Pajacyk`.page`https://www.pajacyk.pl/#index`;

test('Click on belly should donate kids', async (t) => {
  const bellyButton = Selector('.pajacyk__clickbox');
  const thanks = Selector('.pajacyk__thankyou');
  await t.click(bellyButton).expect(thanks.visible).ok();
});
