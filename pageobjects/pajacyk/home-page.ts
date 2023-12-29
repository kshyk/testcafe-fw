import { t, Selector } from 'testcafe';

class HomePage {
  private readonly bellyButton: Selector;
  private readonly thanks: Selector;

  constructor() {
    this.bellyButton = Selector('.pajacyk__clickbox');
    this.thanks = Selector('.pajacyk__thankyou');
  }

  async clickOnBelly() {
    await t.click(this.bellyButton);
  }

  async isThanksVisible() {
    await t.expect(this.thanks.visible).ok();
  }
}

export default new HomePage();
