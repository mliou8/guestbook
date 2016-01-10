app.controller('postCtrl', function ($scope, PostFactory, allPosts) {

	$scope.postComment = function (post) {
		PostFactory.submitPost($scope.post)
		.then(function () {
			$scope.post = "";
			$scope.postForm.$setPristine();
			$scope.postForm	.$setUntouched();
			$scope.formFeedback();
		})
	}
	$scope.black = "black";
	var colorArray = [['light blue', "00CCFF"],
	['purple', "330066"], ['pink', "CC0066"], ["ocean", "1E90FF"],
	['forest green', "339933"], ['black',"000000" ]]

	$scope.setColor = function (color) {
		for (var i = 0; i < colorArray.length; i++) {
			if(color === colorArray[i][0]) {
				return '#' + colorArray[i][1];
			}
		}
	}

	$scope.allPosts = allPosts.data;

	$scope.getPost = function() {
		return PostFactory.getPost();
	}

	$scope.range = function (min, max, data) {
		var input = [];
		for (var i = data.length - max; i <= data.length - 1; i++) {
			input.push(data[i]);
		}
		return input;
	}
	$scope.formFeedback = function() {
		return PostFactory.formFeedback();
	}
});

