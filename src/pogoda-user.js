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
import '@polymer/paper-spinner/paper-spinner.js';

class PogodaUser extends PolymerElement {
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
url="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(SELECT%20woeid%20FROM%20geo.places%20WHERE%20text%3D%22({{lat}}%2C{{lon}})%22)%20and%20u%3D%22c%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
handle-as="json"
on-response="handleResponse"
debounce-duration="300"></iron-ajax>

  <div class="card">
    <div class="circle"><fontawesome-icon prefix="fas" name="sun" fixed-width></fontawesome-icon></div>
    <h1>Twoja Pogoda</h1>
    <p>Sprawdź pogodę w swoim mieście.</p>
   
    <template is="dom-if" if="[[isLoading]]">
    <paper-spinner class="multi" active></paper-spinner>
      </template>

      <template is="dom-if" if="[[!isLoading]]">
    
  <div class=weather>
    [[text]]</br>
Temperatura: [[temperature]]°C </br>
[[date]]</br>
</div>
      <template is="dom-if" if="[[isBadWeather]]">
      <div class=frame-dont-go><button class=weaterbutton><fontawesome-icon prefix="fas" name="times" fixed-width></button></fontawesome-icon>Lepiej zostań w domu</div>
        </template>

        <template is="dom-if" if="{{!isBadWeather}}">
        <div class=frame-go><button class=weaterbutton><fontawesome-icon prefix="fas" name="check" fixed-width></fontawesome-icon></button>Możesz iść na zakupy</div>
        </template> 
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
      var isBadWeather= this.text.includes("Rain") || this.text.includes("Thunder") || this.text.includes("Showers");
    this.set('isBadWeather',isBadWeather);
    }
  
    ready(){
      super.ready();
      navigator.geolocation.getCurrentPosition(this.handleLocationChange.bind(this));
      this.set('isLoading',true);

    }

    handleLocationChange(newLocation,err){
      console.log(newLocation);
      this.set("lat",newLocation.coords.latitude);
      this.set("lon",newLocation.coords.longitude);
      this.set('isLoading',false);
    }
    
}

window.customElements.define('pogoda-user', PogodaUser);
