
function translateDescription(description){
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
 	"Scattered showers"       :"Przelotne opady",
 	"Heavy snow"              :"Duże opady śniegu",
 	"Scattered snow showers"  :"Przelotne opady śniegu",
  "Snow Showers"            :"Opady śniegu",
 	"Isolated Thundershowers" :"Pojedyncze burze",
}
  if(map[description].length > 0) {
    return map[description];
  }

  console.warn("nie znaleziono tlumaczenia");
  return description;
}
