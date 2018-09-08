/* Load the PolymerElement base class and html helper function */
import 'fontawesome-icon';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
/* Load shared styles. All view elements use these styles */
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
        <p>Jak możemy Ci dziś pomóc?</p>
      </div>
    `;
  }
}
/* Register the new element with the browser */
window.customElements.define('pomoc-view', MyNewView);