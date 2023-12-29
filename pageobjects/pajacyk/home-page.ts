import { Selector } from 'testcafe';

export default class HomePage {
  readonly bellyButton: Selector;
  readonly thanks: Selector;

  constructor() {
    this.bellyButton = Selector('.pajacyk__clickbox');
    this.thanks = Selector('.pajacyk__thankyou');
  }
}
