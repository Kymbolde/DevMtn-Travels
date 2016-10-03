angular.module("devmtnTravel").controller("bookedCtrl", function($scope, mainSrv, $stateParams) {
	$scope.locations = mainSrv.travelInfo;

	if ($stateParams.id === "112233") {
		$scope.data = mainSrv.travelInfo[0];
	}
	else if($stateParams.id === "1122343") {
		$scope.data = mainSrv.travelInfo[1];
	}
	else if($stateParams.id === "11223489") {
		$scope.data = mainSrv.travelInfo[2];
	}

})