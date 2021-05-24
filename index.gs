const cfg = {
  apiKey: '' // <-- FILL IN YOUR API KEY FROM https://home.openweathermap.org/api_keys
}

function sendWeatherByEmail() {
  const city = 'amsterdam'; // <-- CHANGE YOUR LOCATION HERE
  const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + cfg.apiKey;
  const response = UrlFetchApp.fetch(url);
  const data = JSON.parse(response.getContentText());
  const temperatureTodayMin = (Number(data.main.temp_min) - 273.15).toFixed(1);
  const temperatureTodayMax = (Number(data.main.temp_max) - 273.15).toFixed(1);
  const body = 'Temperatuur vandaag is: ' + temperatureTodayMin + ' - ' + temperatureTodayMax;
  MailApp.sendEmail('YOUR EMAIL ADDRESS HERE', 'weather', body); // <- CHANGE YOUR EMAIL ADDRESS HERE
}

