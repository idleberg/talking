'use babel';

import { CompositeDisposable, Disposable } from 'atom';

export default {

  package2View: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'package2:logAThing': () => this.logPackage2Thing()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  logPackage2Thing() {
    this.packageOne() // Calls the logAThing() function in the Package1 code
    console.log("...called as a service that package one provided to package two! ")
  },

  consumePackage1(packageOne) { // Grabs the logAThing() function from Package1 as this.packageOne
      this.packageOne = packageOne; // packageOne comes from 'package-one' in package.json field
      return new Disposable(() => {
        this.packageOne = null; // Return a disposable to properly dispose of the subscription
      });
    }

}
