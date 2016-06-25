var Routing = angular.module('Routing', ['ui.router']);


Routing.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('main', {
            url: '/',
            views: {
                '@': {
                    templateUrl: 'templates/main.html'
                },
                'nav@main': {
                    url: 'nav',
                    templateUrl: 'templates/nav.html'
                },
                'sidebar@main': {
                    url: 'sidebar',
                    templateUrl: 'templates/sidebar.html'
                },
                'body@main': {
                    url: 'body',
                    templateUrl: 'templates/body.html'
                },
            },
        })

});

// template and assets should be in assets