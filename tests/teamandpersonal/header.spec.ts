import header from '../../pageobjects/teamandpersonal/header-page';

fixture`Team & Personal: Header`.page`https://teamandpersonal.pl`;

test('Phone number with e-mail address', async () => {
  await header.checkPhone('+48 660 22 77 22');
  await header.checkEmail('biuro [at] teamandpersonal.pl');
});
