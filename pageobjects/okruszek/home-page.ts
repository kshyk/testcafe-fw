import { Selector } from 'testcafe';

export default class HomePage {
  readonly breadButton: Selector;
  readonly thanks: Selector;

  constructor() {
    this.breadButton = Selector('.click-crumb');
    this.thanks = Selector('section#thanks');
  }
}
