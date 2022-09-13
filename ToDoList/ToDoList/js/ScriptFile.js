
    function TodoController ($scope) 
    {
	$scope.appTitle = "ToDo List ";
	$scope.appHeadline = "This will store in local storage!";
	$scope.saved = localStorage.getItem('todos');
	$scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [ {text: 'Create Assignments', done: false}, {text: 'Update Foodhub application', done: false} ];
	localStorage.setItem('todos', JSON.stringify($scope.todos));

	$scope.addTodo = function() {
		$scope.todos.push({
			text: $scope.todoText,
			done: false
		});
		$scope.todoText = ''; 
		localStorage.setItem('todos', JSON.stringify($scope.todos));
	};


	$scope.remaining = function() {
		var count = 0;
		angular.forEach($scope.todos, function(todo){
			count+= todo.done ? 0 : 1;
		});
		return count;
	};

	$scope.archive = function() {
		var oldTodos = $scope.todos;
		$scope.todos = [];
		angular.forEach(oldTodos, function(todo){
			if (!todo.done)
				$scope.todos.push(todo);
		});
		localStorage.setItem('todos', JSON.stringify($scope.todos));
	};
}