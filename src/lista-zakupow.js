/* Load the PolymerElement base class and html helper function */
import 'fontawesome-icon';

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-checkbox/paper-checkbox.js';


import '@polymer/paper-button/paper-button.js';

/* Load shared styles. All view elements use these styles */
import './shared-styles.js';

/* Extend the base PolymerElement class */
class ListaZakupow extends PolymerElement {
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
        <div class="circle"><fontawesome-icon prefix="fas" name="shopping-basket" fixed-width></fontawesome-icon></div>
        <h1>Lista zakupów</h1>
        <p>Dodaj produkty do listy, by nie zapomnieć o nich podczas zakupów.</p>
       
<div class="shoppinglist">
        <template is="dom-repeat" items="{{elements}}"> <paper-checkbox>{{item}}</paper-checkbox>
        <button class="edit-button" raised on-click="edit"><fontawesome-icon prefix="fas" name="pencil-alt" fixed-width></fontawesome-icon></button>
        <button class="delete-button" raised on-click="delete" data-index='{{index}}'><fontawesome-icon prefix="fas" name="trash-alt" fixed-width></fontawesome-icon></button>

        </br></template>
</div>

        
        
      

        <form id="form3">
        <form action="/foo" method="get">
          <iron-input><input class="inputbox" name="name" label="Produkt" id="nameInput" value="{{inputname}}" required></iron-input></br>
          <template is="dom-if" if="{{!isediting}}">
                <paper-button raised on-click="add">Dodaj</paper-button>
            </template>

          <template is="dom-if" if="{{isediting}}">
          <paper-button raised on-click="saveedit">Zapisz zmiany</paper-button>
          </template>
        </form>
        <div class="output"></div>
      </form>

      
      </div>
    `;
  }



add(event){
  //  var newElements=this.elements;
  //  newElements.push(this.name);
  // console.log(this)  
  this.push('elements',this.$.nameInput.value);
    this.notifyPath('elements');
    console.log(this.elements);
    this.set('inputname', '');
}


delete(event){
console.log(event.model.item);
var index = this.elements.indexOf(event.model.item);
this.splice('elements', index, 1);
    
}

edit(event){
var index = this.elements.indexOf(event.model.item);
this.set("inputname",event.model.item);
this.set("editingIndex", index);
this.set("isediting",true);

}

saveedit(event){
    this.elements[this.editingIndex]=this.$.nameInput.value;
    // this.push("elements","");
    // this.pop("elements");
    this.notifySplices("elements");
   this.set("inputname",'');
    this.set('editingIndex',-1);
    this.set('isediting',false);

}

ready(){
  super.ready();
console.log("druga");
}

constructor(){
super();
this.elements=['woda','sok']
this.editingIndex=-1;
this.isediting=false;
console.log("cokolwiek");
}
}
/* Register the new element with the browser */
window.customElements.define('lista-zakupow', ListaZakupow);