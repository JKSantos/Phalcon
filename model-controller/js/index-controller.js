
var app = angular.module("breadCrumb", ['ngRoute']); 

app.config(function($routeProvider) {
	$routeProvider
	.when("#/", {
		templateUrl : "home.html"
	})
	.when("/maintenance", {
		templateUrl : "maintenance.html"
	})
	.when("/transaction", {
		templateUrl : "transaction.html"
	})
});

app.controller("pagesController",['$scope', '$http', function($scope, $http) {
	$scope.pages = [{name:"Home", url:"#/"}];
	$scope.p = [{'name': 'jm'}, {'name': 'jm'}];
	$scope.addPage = function(pageAddress, pageName) {
		var flag = false;

		if($scope.pages.length != 0){
			for(var i = 0; i < $scope.pages.length; i++) {
				if(pageName == $scope.pages[i].name) {
					flag = true;
					continue;
				} 
				
				if(flag == true){
					console.log($scope.pages[i].name);
					$scope.pages.splice(i, 1);
				} else if(i == ($scope.pages.length - 1)) {
					var newPage = {name: pageName, url: pageAddress};
					$scope.pages.push({name: pageName, url: pageAddress});
				}
			}
			flag = false;

		} else {
			var newPage = {name: pageName, url: pageAddress};
					$scope.pages.push({name: pageName, url: pageAddress});
		}

		console.log($scope.pages);	
	}

	// $on('hi', function(e) {

	// })

}]);
app.directive('nameList', function(){
	return {
		scope: {
			a: '=ngListAll' // @, =, &
		},
		restrict: 'A',
		link: function(scope, el, attr) {
			console.log(scope.a)
			console.log(attr.id)
			console.log(el);
		}
	}
});
app.directive('alertHelloWorld', ['$http',function($http){ 
	return {
		restrict: 'C',
		link: function(scope, el, attr) {
			angular.element(el).on('click',function(){
			//	alert('hello world');
			//$http()
			})
		}
	}
}]);

app.directive('submitForm', ['$http',function($http){ 
	return {
		restrict: 'C',
		link: function(scope, el, attr) {
			console.log(angular.element(el).find('input')[0].value);
			//$emit('hi', {name: 'dsfsfsd'}))
		}
	}
}]);

