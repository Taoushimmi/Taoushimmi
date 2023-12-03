// Remplacez 'your_api_key' par votre clé API OpenWeatherMap
var api_key = '76d589c11f8de1e3e9b8dd346d698ce3';

// Fonction pour obtenir les données météo pour une ville spécifique
function getWeather(city) {
    // Construire l'URL pour la requête à l'API OpenWeatherMap
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    // Faire une requête HTTP à l'API OpenWeatherMap
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Afficher les données météo
            console.log(`Température à ${city} : ${data.main.temp}`);
            console.log(`Humidité à ${city} : ${data.main.humidity}`);
            console.log(`Conditions météo à ${city} : ${data.weather[0].description}`);
        })
        .catch(error => console.error('Erreur :', error));
}

// Utiliser la fonction pour obtenir les données météo pour Paris
getWeather('Paris');
