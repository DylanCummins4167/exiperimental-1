$(document).ready(function() {
  $('#search-button').click(function() {
    var city = $('#city-input').val();
    if (city !== '') {
      // Simulated API call with sample data
      var sampleData = {
        city: city,
        temperature: '25',
        humidity: '60',
        windSpeed: '10'
      };
      displayWeatherInfo(sampleData);
    } else {
      $('#weather-info').html('Please enter a city name.');
    }
  });

  function displayWeatherInfo(data) {
    var info = '';
    info += '<p><strong>City:</strong> ' + data.city + '</p>';
    info += '<p><strong>Temperature:</strong> ' + data.temperature + '°C</p>';
    info += '<p><strong>Humidity:</strong> ' + data.humidity + '%</p>';
    info += '<p><strong>Wind Speed:</strong> ' + data.windSpeed + ' km/h</p>';
    $('#weather-info').html(info);
  }
});


