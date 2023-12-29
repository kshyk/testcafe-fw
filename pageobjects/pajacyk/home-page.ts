import { Selector } from 'testcafe';

class HomePage {
  readonly bellyButton: Selector;
  readonly thanks: Selector;

  constructor() {
    this.bellyButton = Selector('.pajacyk__clickbox');
    this.thanks = Selector('.pajacyk__thankyou');
  }
}

export default new HomePage();
