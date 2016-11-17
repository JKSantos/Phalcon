var app = angular.module('ToDo', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when("/HomePage", {
        templateUrl : "dashboard.html"
    })
    .when("/LinkPage", {
        templateUrl : "links.html"
    })
    .when("/AboutPage", {
        templateUrl : "about.html"
    })
    .when("/HomePage/Notifs", {
        templateUrl : "notifications.html"
    })
    .when("/HomePage/Messages", {
        templateUrl : "messages.html"
    })
    .when("/HomePage/Friends", {
        templateUrl : "friends.html"
    })
    .when("/AboutPage/Mission", {
        templateUrl : "mission.html"
    })
    .when("/AboutPage/Vision", {
        templateUrl : "vision.html"
    })
    .when("/AboutPage/OurCompany", {
        templateUrl : "company.html"
    })
    .otherwise({
        redirectTo : "index.html"
    })
});


app.controller('todoController', ['$scope', function($scope){
    $scope.todos = [
    ];

    $scope.addToDo = function(pageName, pageAddress, pageLevel){ 
        var flag = false;

        alert(pageLevel);

        if(pageLevel == '1'){
            alert("spliced all");
            spliceAll();
            $scope.todos.push({'title':pageName, 'address':pageAddress, 'level':pageLevel})
        } else {
            for(var i = 0; i < $scope.todos.length; i++) {
                
                if($scope.todos[i].title == pageName){
                    flag = true;
                    alert("equal");
                    continue;
                }

                if(flag == true){
                    $scope.todos.splice(i, 1);
                } else if(i == ($scope.todos.length - 1)) {
                    $scope.todos.push({'title':pageName, 'address':pageAddress, 'level':pageLevel})
                }
            }
        }
    }

    function spliceAll(){
        while($scope.todos.length != 0){
            for(var i = 0; i < $scope.todos.length != 0; i++) {
                $scope.todos.splice(i, 1);
            }
        }
    }
}])