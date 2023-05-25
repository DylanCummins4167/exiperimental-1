$(document).ready(function() {
  $('#search-button').click(function() {
    var city = $('#city-input').val();
    if (city !== '') {
      // Simulating API call with sample data
      var apiUrl = 'https://api.example.com/weather?city=' + city;
      $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function(response) {
          displayWeatherInfo(response);
        },
        error: function() {
          $('#weather-info').html('Failed to fetch weather data.');
        }
      });
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


