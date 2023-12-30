import { t, Selector } from 'testcafe';

class SecurePage {
  private readonly logoutButton: Selector;

  constructor() {
    this.logoutButton = Selector("a[href='/logout']");
  }

  async logout() {
    await t.click(this.logoutButton.filterVisible());
    await t.expect(this.logoutButton.visible).notOk();
  }
}

export default new SecurePage();
