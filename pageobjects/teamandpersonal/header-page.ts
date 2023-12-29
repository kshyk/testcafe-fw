import { t, Selector } from 'testcafe';

class Header {
  private readonly phone: Selector;
  private readonly email: Selector;

  constructor() {
    this.phone = Selector('.topka-tel');
    this.email = Selector('.topka-mail');
  }

  async checkPhone(phone: string) {
    await t.expect(this.phone.innerText).contains(phone);
  }

  async checkEmail(email: string) {
    await t.expect(this.email.innerText).contains(email);
  }
}

export default new Header();
