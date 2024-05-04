import bar from '../../pageobjects/teamandpersonal/cookies-bar';

fixture`Cookie Policy`.page`https://teamandpersonal.pl`;

test('Check cookie bar content and dismiss it afterwards', async () => {
  await bar.isCookiesBarVisible();
  await bar.checkText(
    'Używamy ciasteczek, aby zapewnić najlepszą jakość korzystania z naszej witryny.'
  );
  await bar.checkText(
    'Możesz dowiedzieć się więcej o tym, jakich ciasteczek używamy, lub wyłączyć je w ustawieniach.'
  );
  await bar.allowAll();
});
