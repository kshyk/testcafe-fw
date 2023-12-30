import loginPage from '../pageobjects/the-internet/login-page';
import flash from '../pageobjects/the-internet/flash-message';
import securePage from '../pageobjects/the-internet/secure-page';
require('dotenv').config();

fixture`The Internet`.page`https://the-internet.herokuapp.com`;

test.page(`./login`)('Form Authentication', async () => {
  const username = process.env.USER_NAME;
  const password = process.env.USER_PASSWORD;

  const usernameCases = new Map<string, string>([
    ['', password],
    [username.slice(0, -1), password]
  ]);
  for (const [username, password] of usernameCases) {
    await loginPage.login(username, password);
    await flash.checkErrorMessage('Your username is invalid!');
  }

  const passwordCases = new Map<string, string>([
    ['', username],
    [password.slice(0, -1), username]
  ]);
  for (const [password, username] of passwordCases) {
    await loginPage.login(username, password);
    await flash.checkErrorMessage('Your password is invalid!');
  }

  await loginPage.login(username, password);
  await flash.checkSuccessMessage('You logged into a secure area!');

  await securePage.logout();
  await flash.checkSuccessMessage('You logged out of the secure area!');
});
