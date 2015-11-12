var app = angular.module('App'); 

app.controller('MainController', function($scope, myService){

var employees = {
	1: {name: 'Ryan Graham'}, 
	2: {name: 'Davin Clarke'}, 
	3: {name: 'Spencer Bond'}
};


$scope.addItUp = function(number1, number2){
	$scope.answer = parseInt($scope.number1) + parseInt($scope.number2); 
}	

$scope.tryReturn = function(firstName, lastName){
	var now = new Date();
	alert($scope.firstName + ' ' + $scope.lastName  + ' is now working as of ' + now); 
}

$scope.clockIn = function(employNum){
	var now = new Date();
	$scope.inConfirm = employees[$scope.employNum].name + ' is now working as of ' + now;
}


});