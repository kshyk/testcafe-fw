import { t, Selector } from 'testcafe';

class HomePage {
  private readonly breadButton: Selector;
  private readonly thanks: Selector;

  constructor() {
    this.breadButton = Selector('.click-crumb');
    this.thanks = Selector('section#thanks');
  }

  async clickOnBread() {
    await t.click(this.breadButton);
  }

  async isThanksVisible() {
    await t.expect(this.thanks.visible).ok();
  }
}

export default new HomePage();
