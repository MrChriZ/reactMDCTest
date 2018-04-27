import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
    <div class="mdc-toolbar mdc-toolbar--fixed">
    <div class="mdc-toolbar__row">
      <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
        <a href="#" class="demo-menu material-icons mdc-toolbar__menu-icon">menu</a>
        <span class="mdc-toolbar__title catalog-title">Temporary Drawer</span>
      </section>
    </div>
  </div>

  <aside id="temporaryDrawer" class="mdc-drawer mdc-drawer--temporary demo-drawer mdc-drawer--open">
    <nav class="mdc-drawer__drawer">
      <header class="mdc-drawer__header">
        <div class="mdc-drawer__header-content mdc-theme--on-primary mdc-theme--primary-bg">
          Header here
        </div>
      </header>
      <nav class="mdc-drawer__content mdc-list-group">
        <div id="icon-with-text-demo" class="mdc-list">
          <a class="mdc-list-item demo-drawer-list-item" href="#">
            <i class="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>Inbox
          </a>
          <a class="mdc-list-item demo-drawer-list-item mdc-list-item--selected" href="#">
            <i class="material-icons mdc-list-item__graphic" aria-hidden="true">star</i>Star
          </a>
          <a class="mdc-list-item demo-drawer-list-item" href="#">
            <i class="material-icons mdc-list-item__graphic" aria-hidden="true">send</i>Sent Mail
          </a>
          <a class="mdc-list-item demo-drawer-list-item" href="#">
            <i class="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>Drafts
          </a>
        </div>
        

        <div class="mdc-list">
          <a class="mdc-list-item demo-drawer-list-item" href="#">
            <i class="material-icons mdc-list-item__graphic" aria-hidden="true">email</i>All Mail
          </a>
          <a class="mdc-list-item demo-drawer-list-item" href="#">
            <i class="material-icons mdc-list-item__graphic" aria-hidden="true">delete</i>Trash
          </a>
          <a class="mdc-list-item demo-drawer-list-item" href="#">
            <i class="material-icons mdc-list-item__graphic" aria-hidden="true">report</i>Spam
          </a>
        </div>
      </nav>
    </nav>
  </aside>
</div>
    );
  }
}

export default App;
