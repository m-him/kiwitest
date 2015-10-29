app.controller(
	'WeatherGeolocation',
	function ($scope, ForecastService) {
	
		/* get data on form submit event */
		$scope.submit = function () {

			/* check value of required inputs */
			if ($scope.latitude && $scope.longitude) {

				/* get ForecastService's data */
				$scope.result = ForecastService.getWeatherInformation($scope.latitude, $scope.longitude);

			}
		}
	}
);