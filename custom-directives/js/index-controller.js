
var app = angular.module("noobsApp", []); 
app.controller("ctrl", function($scope) {
    $scope.save = function() {
       console.log("-===");
    }
});

app.directive('noobsDirective', function(){
    return{
        restrict : 'C',
        link : function(scope, el, attr) {
             console.log(scope.username); 
            angular.element(el).on('click', function(){
                var username = angular.element(el).find('input')[0].value,
                    password = angular.element(el).find('input')[1].value;
                   
                if(username == "admin" && password == "admin") {
                    alert("Success!! You've logged in!");
                } else {
                    alert("Invalid");
                }
            })
        }
    }
});