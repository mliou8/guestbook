var app = angular.module('guestbook', ['ui.router']);


app.config(function($urlRouterProvider) {
	$urlRouterProvider.otherwise('/')
})

