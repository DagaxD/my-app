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
import '@polymer/paper-spinner/paper-spinner.js';
import './text-mapping.js'
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
        <h1>Pogoda w Szczecinie</h1>
        <p>Sprawdź pogodę w Szczecinie.</p>
       
        <template is="dom-if" if="[[weatherIsLoading]]">
    <paper-spinner class="multi" active></paper-spinner>
      </template>
      <template is="dom-if" if="[[!weatherIsLoading]]">
    
      <div class=weather>
        [[text]]</br>
Temperatura: [[temperature]]°C </br>

</div>
          <template is="dom-if" if="[[isBadWeather]]">
          <div class=frame-dont-go><button class=weaterbutton><fontawesome-icon prefix="fas" name="times" fixed-width></button></fontawesome-icon>Lepiej zostań w domu</div>
            </template>

            <template is="dom-if" if="{{!isBadWeather}}">
            <div class="tooltip">
            <span class="tooltiptext">Pod warunkiem, że sklepy są jeszcze otwarte.</span>
           <div class=frame-go><button class=weaterbutton><fontawesome-icon prefix="fas" name="check" fixed-width></fontawesome-icon></button>Możesz jechać na zakupy do Szczecina</div>
            </div></template> 
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
  
    this.set('date',date);  
    var isBadWeather= text.includes("Rain") || text.includes("Thunder") || text.includes("Showers") || text.includes("Hurricane") || text.includes("Storm") || text.includes("Snow") || text.includes("Hail") || text.includes("Sleet");
    this.set('isBadWeather',isBadWeather);
    this.set('weatherIsLoading',false);  
    this.set('text',this.translateDescription(text));
  }

  ready(){
    super.ready();
    this.set('weatherIsLoading',true);
  }
  
  translateDescription(description){
    var map = {
      "Showers"                 :"Deszczowo",
      "Partly Cloudy"           :"Częściowe zachmurzenie",
      "Scattered Thunderstorms" :"Przelotna burza z piorunami",
      "Light Rain with Thunder" :"Lekki deszcz z piorunem",
      "Thunderstorms"           :"Burza",
      "Heavy Rain"              :"Duże opady deszczu",
      "Mostly Sunny"            :"Dość słonecznie",
      "Light Rain"              :"Lekki deszcz",
      "Foggy"                   :"Mgliście",
      "Fair"                    :"Ładnie",
      "Sunny"                   :"Słonecznie",
      "Mostly Cloudy"           :"Mocne zachmurzenie",
      "Isolated Thunderstorms"  :"Pojedyncze burze z piorunami",
      "Thundershowers"          :"Deszcze z piorunami",
      "Heavy Thunderstorms"     :"Burza z piorunami",
      "Clear"                   :"Czysto",
      "Rain"                    :"Deszcz",
      "Cloudy"                  :"Pochmurnie",  
      "Tropical Storm"          :"Burza Tropikalna",
      "Hurricane"               :"Huragan",
      "Severe Thunderstorms"    :"Poważne burze z piorunami",
       "Mixed Rain And Snow"     :"Mieszany deszcz i śnieg",
       "Mixed Rain And Sleet"    :"Mieszany deszcz ze śniegiem",
       "Mixed Snow And Sleet"    :"Mieszany śnieg z deszczem",
       "Freezing Drizzle"        :"Zamarzająca mżawka",
       "Drizzle"                 :"Mżawka",
       "Freezing Rain"           :"Zamarzający deszcz",
       "Snow Flurries"           :"Podmuchy śniegu",
       "Light Snow Showers"      :"Lekkie opady śniegu",
      "Blowing Snow"            :"Podmuchy śniegu",
      "Snow"                    :"Śnieg",
       "Hail"                    :"Grad",
       "Sleet"                   :"Śnieg z deszczem",
       "Dust"                    :"Pył",
       "Haze"                    :"Mgła",
       "Smoky"                   :"Zadymione",
       "Blustery"                :"Wietrznie",
       "Windy"                   :"Wietrznie",
       "Cold"                    :"Zimno",
       "Mixed Rain And Hail"     :"Mieszany deszcz z gradem",
       "Hot"                     :"Gorąco",
       "Scattered Showers"       :"Przelotne opady",
       "Heavy snow"              :"Duże opady śniegu",
       "Scattered snow showers"  :"Przelotne opady śniegu",
      "Snow Showers"            :"Opady śniegu",
       "Isolated Thundershowers" :"Pojedyncze burze",
    };
  
    if(map[description]) {
      return map[description];
    }
  
    console.warn("nie znaleziono tlumaczenia");
    return description;
  }
}

window.customElements.define('pogoda-view', pogoda);
