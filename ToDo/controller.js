var app = angular.module('ToDo', []);

app.controller('todoController', ['$scope', function($scope){
    $scope.todos = [
        {'title':'Default ToDo', 'done':'false'}
    ];

    $scope.addToDo = function(){
        $scope.todos.push({'title':$scope.newTodo, 'done':false})
        $scope.newTodo = '';
    }

    $scope.clearCompleted = function(){

    }

    console.log($scope.todos);
}])