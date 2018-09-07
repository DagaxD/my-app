/* Load the PolymerElement base class and html helper function */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
/* Load shared styles. All view elements use these styles */
import './shared-styles.js';

/* Extend the base PolymerElement class */
class ListaZakupow extends PolymerElement {
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
       

        <template is="dom-repeat" items="{{elements}}"> <paper-checkbox>{{item}}</paper-checkbox><button class="delete-button" raised on-click="delete" data-index='{{index}}'><i class="fas fa-trash-alt"></i></button></br></template>


        <iron-form id="form3">
        <form action="/foo" method="get">
          <paper-input name="name" label="Rzecz" value="{{name}}"  required></paper-input>
          <paper-button raised on-click="add">Dodaj</paper-button>
        </form>
        <div class="output"></div>
      </iron-form>
     
      
      </div>
    `;
  }
add(event){
    console.log('metoda add została wywołana',this)
  //  var newElements=this.elements;
  //  newElements.push(this.name);
    this.push('elements',this.name);
    this.notifyPath('elements');
    console.log(this.elements);
    this.set('name', '');
}


delete(event){
console.log(event.model.item);
var index = this.elements.indexOf(event.model.item);
this.splice('elements', index, 1);
    
}

edit(event){

}
constructor(){
super();
this.elements=['woda','sok']
}
}
/* Register the new element with the browser */
window.customElements.define('lista-zakupow', ListaZakupow);