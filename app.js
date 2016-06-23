var Routing = angular.module('Routing', ['ui.router']);


Routing.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('home', {
        url: '/home',
        views: {
            '': {
                templateUrl: 'templates/main.html'
            },
            'nav@home': {
                templateUrl: 'templates/nav.html'
            },
            'body@home': {
                templateUrl: 'templates/body.html'
            },
            'footer@home': {
                templateUrl: 'templates/footer.html'
            },
            'sidebar@home': {
                templateUrl: 'templates/sidebar.html'
            }
        }
    });

});

// template and assets should be in assets