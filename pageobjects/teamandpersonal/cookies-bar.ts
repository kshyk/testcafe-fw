import { t, Selector } from 'testcafe';

class CookiesBar {
  private readonly bar: Selector;
  private readonly allowAllButton: Selector;

  constructor() {
    this.bar = Selector('aside#moove_gdpr_cookie_info_bar');
    this.allowAllButton = Selector('.moove-gdpr-infobar-allow-all');
  }

  clickAllowAllButton = async () => await t.click(this.allowAllButton);

  async allowAll() {
    this.clickAllowAllButton();
    this.isCookiesBarHidden();
  }

  isCookiesBarVisible = async () => await t.expect(this.bar.visible).ok();

  isCookiesBarHidden = async () => await t.expect(this.bar.visible).notOk();

  checkText = async (text: string) =>
    await t.expect(this.bar.textContent).contains(text);
}

export default new CookiesBar();
