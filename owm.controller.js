(function () {
	'use strict';
	angular
		.module('app.widgets.owm', [])
		.controller('ngOwmCtrl', ['$rootScope', '$scope', 'OHService',
			function ($rootScope, $scope, OHService) {
				// Fill the three forecast days with data
				function loadOwmForecast() {
					console.log("Processing OWM widget forecast");
					try {
					    setForecastItems(0);
					    setForecastItems(1);
					    setForecastItems(2);
					    setForecastItems(3);
					} catch (err) {
						console.log("Error during OWM widget: " + err)
					}
                                }

				// Set forecast values for particular day
				function setForecastItems(day) {
					$scope["temp" + day] = $scope.itemState('Weather_OWM_Temp_d' + day);
					$scope["condition" + day] = $scope.itemState('Weather_OWM_Condition_d' + day);
					$scope["condition_id" + day] = $scope.itemState('Weather_OWM_ConditionId_d' + day);
					$scope["date_time" + day] = $scope.itemState('Weather_OWM_DateTime_d' + day);
				}

				// Run function when an items updates
				$rootScope.$on('openhab-update', function (event, item) {
					loadOwmForecast();
				});

				loadOwmForecast();
			}
		]);
})();
