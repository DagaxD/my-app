/* Load the PolymerElement base class and html helper function */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
/* Load shared styles. All view elements use these styles */
import './shared-styles.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
/* Extend the base PolymerElement class */
class MyNewView extends PolymerElement {
  /* Define a template for the new element */
  static get template() {
    return html`
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle"><i class="fas fa-shopping-basket"></i></div>
        <h1>Lista zakupów</h1>
        <p>Tu edytujesz swoją listę zakupów</p>

      </div>
    `;
  }
}
/* Register the new element with the browser */
window.customElements.define('lista-zakupow', MyNewView);