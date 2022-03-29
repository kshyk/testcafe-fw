import { Selector } from 'testcafe';

class HomePage {
  readonly breadButton: Selector;
  readonly thanks: Selector;

  constructor() {
    this.breadButton = Selector('.click-crumb');
    this.thanks = Selector('section#thanks');
  }
}

export default new HomePage();
