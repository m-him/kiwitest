/**
 * get data of Forecast.io-API by JSONP request 
**/

app.service('ForecastService', ['$http', function ($http) {
	var srv = {},
		data = {};

	/* private weather service request */
	srv.getWeatherInformation = function (latitude, longitude) {

		/* request */
		$http.jsonp('https://api.forecast.io/forecast/7911cc444847c2a8aa89b45000515edc/'+latitude+','+longitude+'?callback=JSON_CALLBACK&lang=de&units=si')
	    	.success(function (responseData) {
	    		angular.extend(data, responseData);
	      	});

	      	return data;
	};

	/* public api */
	return {
		getWeatherInformation: function (latitude, longitude) {
			return srv.getWeatherInformation(latitude, longitude);
		}
	};
}]);