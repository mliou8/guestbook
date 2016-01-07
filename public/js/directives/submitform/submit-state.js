app.config(function ($stateProvider) {
    $stateProvider.state('submitform', {
        url: '/',
        templateUrl: 'js/directives/submitform/form.html',
        controller: 'postCtrl',
        resolve: {
            allPosts: function (PostFactory) {
                return PostFactory.getPost();
            }
        }
    })

});