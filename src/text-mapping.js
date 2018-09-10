
function translateDescription(description){
var map = {
  "Partly Cloud"            :"Częściowe chmury",
  "Showers"                 :"Deszczowo",
  "Partly Cloudy"           :"Częściowe zachmurzenie",
  "AM Showers"              :"Poranny deszcz",
  "PM Showers"              :"Popołudniowy deszcz",
  "PM Thunderstorms"        :"Popołudniowa burza",
  "Scattered Thunderstorms" :"Rozproszona burza z piorunami",
  "Light Rain with Thunder" :"Lekki deszcz z piorunem",
  "Thunderstorms"           :"Burza",
  "Heavy Rain"              :"Mocny deszcz",
  "Mostly Sunny"            :"Dość słonecznie",
  "Light Rain"              :"Lekki deszcz",
  "Fog"                     :"Mgła",
  "Fair"                    :"Ładnie",
  "Sunny"                   :"Słonecznie",
  "AM Rain"                 :"Poranny deszcz",
  "PM Rain"                 :"Popołudniowy deszcz",
  "Mostly Cloudy"           :"Mocne zachmurzenie",
  "Isolated Thunderstorms"  :"Pojedyncze burze z piorunami",
  "Thundershowers"          :"Deszcze z piorunami",
  "Heavy Thunderstorms"     :"Burza z piorunami",
  "Clear"                   :"Czysto",
  "Rain"                    :"Deszcz",
  "Cloudy"                  :"Pochmurnie"  
}
  if(map[description].length > 0) {
    return map[description];
  }

  console.warn("nie znaleziono tlumaczenia");
  return description;
}
