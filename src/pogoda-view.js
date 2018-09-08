/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
import 'fontawesome-icon';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';

import './shared-styles.js';

class pogoda extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <iron-ajax
    auto
    url="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22szczecin%22)%20%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
    handle-as="json"
    on-response="handleResponse"
    debounce-duration="300"></iron-ajax>

      <div class="card">
        <div class="circle"><fontawesome-icon prefix="fas" name="sun" fixed-width></fontawesome-icon></div>
        <h1>Pogoda</h1>
        <p>Sprawdź pogodę w swoim mieście zanim wyjdziesz na zakupy.</p>
       
      
        [[text]]</br>
Temperatura: [[temperature]]°C </br>
[[date]]</br>

          <template is="dom-if" if="[[isBadWeather]]">
          <div class=frame-dont-go><button class=weaterbutton><fontawesome-icon prefix="fas" name="times" fixed-width></button></fontawesome-icon>Lepiej zostań w domu</div>
            </template>

            <template is="dom-if" if="{{!isBadWeather}}">
            <div class=frame-go><button class=weaterbutton><fontawesome-icon prefix="fas" name="check" fixed-width></fontawesome-icon></button>Możesz iść na zakupy</div>
            </template> 
      </div>
    `;
  }

  handleResponse(resp){
  let data = resp.detail.response;
    let temperature = data.query.results.channel.item.condition.temp;
    let text = data.query.results.channel.item.condition.text;
   
    let date = data.query.results.channel.item.condition.date;
    console.log(data, temperature,text, date);
    this.set('temperature',temperature);
    this.set('text',text);
    this.set('date',date);  
    var IsBadWeather= this.text.includes("Rain");
    var IsBadWeather= this.text.includes("Thunder");
    var IsBadWeather= this.text.includes("Showers");
  this.set('isBadWeather',IsBadWeather);
  }

  ready(){
    super.ready();
  }

}

window.customElements.define('pogoda-view', pogoda);
