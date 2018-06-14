'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
  this.subscriptions = new CompositeDisposable();

    // Register command that calls provided service function from package1
  this.subscriptions.add(atom.commands.add('atom-workspace', {
  'package1:logAThing': () => this.logPackage1Thing()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  providePackage1() { //register this as a provided service in package.json
    return this.logAThing //needs to return a function or an object
  },

  logAThing() {
    console.log("A thing...")
  },

  logPackage1Thing() {
    this.logAThing()
    console.log("...called directly from package 1.")
  }

};
