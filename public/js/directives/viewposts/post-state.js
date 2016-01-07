app.config(function ($stateProvider) {
    $stateProvider.state('viewPosts', {
        url: '/viewall',
        templateUrl: 'js/directives/viewposts/viewposts.html',
        controller: 'postCtrl',
        resolve: {
            allPosts: function (PostFactory) {
                return PostFactory.getPost();
            }
        }
    })

});