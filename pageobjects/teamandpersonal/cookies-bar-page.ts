import { t, Selector } from 'testcafe';

class CookiesBar {
  private readonly cookieBar: Selector;
  private readonly acceptCookiesButton: Selector;

  constructor() {
    this.cookieBar = Selector('aside#moove_gdpr_cookie_info_bar', {
      timeout: 15000
    });
    this.acceptCookiesButton = Selector('.moove-gdpr-infobar-allow-all');
  }

  async acceptCookies() {
    await t.click(this.acceptCookiesButton);
  }

  async checkVisibility(isVisible: boolean) {
    await t.expect(this.cookieBar.visible).eql(isVisible);
  }

  async checkContent(content: string) {
    await t.expect(this.cookieBar.innerText).contains(content);
  }
}

export default new CookiesBar();
