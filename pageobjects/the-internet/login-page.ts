import { t, Selector } from 'testcafe';

class LoginPage {
  private readonly usernameInput: Selector;
  private readonly passwordInput: Selector;
  private readonly loginButton: Selector;

  constructor() {
    this.usernameInput = Selector('#username');
    this.passwordInput = Selector('#password');
    this.loginButton = Selector('button').withText('Login');
  }

  async login(username: string, password: string) {
    await t
      .typeText(this.usernameInput, username)
      .typeText(this.passwordInput, password)
      .click(this.loginButton);
  }
}

export default new LoginPage();
