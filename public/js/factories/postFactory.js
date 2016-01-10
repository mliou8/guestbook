app.factory('PostFactory', function ($http) {
    return {
        submitPost: function (post) {
            return $http.post('/guestbook/submit', post)
        },
        getPost: function () {
            return $http.get('/guestbook/viewall')
        },
        formFeedback: function () {
        	alert("Thank you for submitting!")
        }
    }
});
