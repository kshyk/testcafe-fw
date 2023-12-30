import { t, Selector } from 'testcafe';

class FlashMessage {
  private readonly successAlert: Selector;
  private readonly errorAlert: Selector;

  constructor() {
    this.successAlert = Selector('.success');
    this.errorAlert = Selector('.error');
  }

  async checkSuccessMessage(message: string) {
    await t.expect(this.successAlert.innerText).contains(message);
  }

  async checkErrorMessage(message: string) {
    await t.expect(this.errorAlert.innerText).contains(message);
  }
}

export default new FlashMessage();
