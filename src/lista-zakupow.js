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
        <p>Dodaj produkty do listy, by nie zapomnieć o nich podczas zakupów.</p>
       

        <template is="dom-repeat" items="{{elements}}"> <paper-checkbox>{{item}}</paper-checkbox>
        <button class="edit-button" raised on-click="edit"><i class="fas fa-pencil-alt"></i></button>
        <button class="delete-button" raised on-click="delete" data-index='{{index}}'><i class="fas fa-trash-alt"></i></button>
       
        </br></template>


        
        
      

        <iron-form id="form3">
        <form action="/foo" method="get">
          <paper-input name="name" label="Produkt" value="{{name}}"  required></paper-input>
          <template is="dom-if" if="{{!isediting}}">
                <paper-button raised on-click="add">Dodaj</paper-button>
            </template>

          <template is="dom-if" if="{{isediting}}">
          <paper-button raised on-click="saveedit">Zapisz zmiany</paper-button>
          </template>
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
var index = this.elements.indexOf(event.model.item);
this.set("name",event.model.item);
this.set("editingIndex", index);
this.set("isediting",true);

}

saveedit(event){
    this.elements[this.editingIndex]=this.name;
    // this.push("elements","");
    // this.pop("elements");
    this.notifySplices("elements");
    this.set("name",'');
    this.set('editingIndex',-1);
    this.set('isediting',false);

}


constructor(){
super();
this.elements=['woda','sok']
this.editingIndex=-1;
this.isediting=false;
}
}
/* Register the new element with the browser */
window.customElements.define('lista-zakupow', ListaZakupow);