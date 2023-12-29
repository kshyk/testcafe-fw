import cookiesBar from '../../pageobjects/teamandpersonal/cookies-bar-page';

fixture('Team & Personal: Cookie bar').page`https://teamandpersonal.pl`;

test('Check content and dismiss it afterwards', async () => {
  await cookiesBar.checkVisibility(true);
  await cookiesBar.checkContent(
    'Używamy ciasteczek, aby zapewnić najlepszą jakość korzystania z naszej witryny.'
  );
  await cookiesBar.checkContent(
    'Możesz dowiedzieć się więcej o tym, jakich ciasteczek używamy, lub wyłączyć je w ustawieniach.'
  );
  await cookiesBar.acceptCookies();
  await cookiesBar.checkVisibility(false);
});
