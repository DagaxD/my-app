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
         
          <paper-listbox class="paperlistbox" attr-for-selected="item-name" selected="{{itemName}}" fallback-selection="Żaden problem nie został wybrany.">
          <paper-item class="paperitem" item-name="Jeżeli chcesz dowiedzieć się, jaka obecnie jest pogoda w Szczecinie, kliknij w zakładkę z Menu 'Pogoda w Szczecinie'. Tam znajdziesz informacje o obecnej temperaturze oraz stanie pogody. Pod danymi pogodowymi, znajdziesz również podpowiedź, czy pogoda pozwala na wyjście do sklepu.">Problem z pogodą w Szczecinie</paper-item>
          <paper-item class="paperitem" item-name="Jeżeli chcesz dowiedzieć się, jaka obecnie jest pogoda w Twoim mieście, kliknij w zakładkę z Menu 'Twoja Pogoda' oraz udostępnij witrynie informację o położeniu. Tam znajdziesz informacje o obecnej temperaturze oraz stanie pogody. Pod danymi pogodowymi, znajdziesz również podpowiedź, czy pogoda pozwala na wyjście do sklepu.">Problem z Twoją pogodą</paper-item>
          <paper-item class="paperitem" item-name="Jeżeli wybierasz się na zakupy, to kliknij w zakładkę z Menu 'Lista zakupów'. Możesz usunąć znajdujące się domyślnie na liście produkty i dodać swoje. Wystarczy, że w odpowiednim miejscu pod listą wpiszesz nazwę produktu i klikniesz przycisk 'Dodaj'. Jeśli się pomylisz, wystarczy że klikniesz w ikonkę długopisu i przejdziesz do edycji wybranej pozycji. Usunąć produkt z listy możesz klikając ikonkę kosza.">Problem z listą zakupów</paper-item>
        </paper-listbox> 
        <div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <p class="helpchosen">[[itemName]]</p>
    </div>
    <div class="flip-box-back">
      <p class="helpchosenicon"><fontawesome-icon prefix="fas" name="info" fixed-width></fontawesome-icon></p>
    </div>
  </div>
</div>
        </template>
        </dom-bind>
     
<template is="dom-if" if="[[chosenIndex]]">
aaa
</template>
     
      </div>
    `;
  }

  
}
/* Register the new element with the browser */
window.customElements.define('pomoc-view', MyNewView);