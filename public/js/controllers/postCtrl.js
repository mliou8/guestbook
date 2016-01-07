app.controller('postCtrl', function ($scope, PostFactory, allPosts) {

	$scope.postComment = function (post) {
		PostFactory.submitPost($scope.post);
		$scope.post.name = null;
		$scope.post.comment = null;
		$scope.postForm.$setUntouched();
		$scope.postForm.$setPristine();
	}
	$scope.allPosts = allPosts.data;
	$scope.getPost = function() {
	}

});

