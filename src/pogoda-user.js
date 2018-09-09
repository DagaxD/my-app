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
import 'geolocator/dist/geolocator.min.js';

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
      url="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(SELECT%20woeid%20FROM%20geo.places%20WHERE%20text%3D%22(50%2C15)%22)%20and%20u%3D%22c%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
      handle-as="json"
      on-response="handleResponse"
      debounce-duration="300"></iron-ajax>
  
      <geo-location latitude="{{latitude}}" longitude="{{longitude}}"></geo-location>

<ul>
  <li>Latitude: [[latitude]]</li>
  <li>Longitude: [[longitude]]</li>
</ul>
        <div class="card">
          <div class="circle"><fontawesome-icon prefix="fas" name="sun" fixed-width></fontawesome-icon></div>
          <h1>Twoja pogoda</h1>
          <p>Sprawdź pogodę w swoim mieście zanim wyjdziesz na zakupy.</p>
         
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

              <div id="map-canvas" style="width:600px;height:400px"></div>
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

      geolocator.config({
        language: "en",
        google: {
            version: "3",
            key: "AIzaSyBgx-B_2sd8RDKSS7o7-5o42Lx3l3VEpsQ"
        }
    });

   
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumWait: 10000,     // max wait time for desired accuracy
            maximumAge: 0,          // disable cache
            desiredAccuracy: 30,    // meters
            fallbackToIP: true,     // fallback to IP if Geolocation fails or rejected
            addressLookup: true,    // requires Google API key if true
            timezone: true,         // requires Google API key if true
            map: "map-canvas",      // interactive map element id (or options object)
            staticMap: true         // get a static map image URL (boolean or options object)
        };
        geolocator.locate(options, function (err, location) {
            if (err) return console.log(err);
            console.log(location);
        });
    };
    
}

window.customElements.define('pogoda-user', PogodaUser);
