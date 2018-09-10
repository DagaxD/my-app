/* Load the PolymerElement base class and html helper function */
import 'fontawesome-icon';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
/* Load shared styles. All view elements use these styles */
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';

import './shared-styles.js';

/* Extend the base PolymerElement class */
class MyNewView extends PolymerElement {
  /* Define a template for the new element */
  static get template() {
    return html`

      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle"><fontawesome-icon prefix="fas" name="hands-helping" fixed-width></fontawesome-icon></div>
        <h1>Pomoc</h1>
        <p>Jak możemy Ci dziś pomóc? Wybierz problem z ramki poniżej. </p>

        
        <dom-bind>
        <template is="dom-bind">
          <p class="helpchosen">[[itemName]] został wybrany.</p>
          <paper-listbox class="paperlistbox" attr-for-selected="item-name" selected="{{itemName}}" fallback-selection="Żaden problem nie">
          <paper-item class="paperitem" on-click="itemNameIsChosen" item-info="próba" item-name="Problem z pogodą w Szczecinie">Problem z pogodą w Szczecinie</paper-item>
          <paper-item class="paperitem" item-name="Problem z Twoją pogodą">Problem z Twoją pogodą</paper-item>
          <paper-item class="paperitem" item-name="Problem z listą zakupów">Problem z listą zakupów</paper-item>
        </paper-listbox>
        <p> [[itemInfo]]</p>
        </template>
        </dom-bind>
     
<template is="dom-if" if="[[chosenIndex]]">
aaa
</template>
     
      </div>
    `;
  }
itemNameIsChosen(){
  console.log("wiadomość");
}
  
}
/* Register the new element with the browser */
window.customElements.define('pomoc-view', MyNewView);