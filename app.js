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
                    url: 'home',
                    //  controller:'bodyController',
                    templateUrl: 'Views/home/homeView.html'
                },
            },
        })
    .state('main.course', {
        url: 'course',
        templateUrl: 'Views/courses/courseView.html',
    })
    .state('blog', {
        url: 'blog',
        templateUrl: 'Views/blog/blogView.html',
        parent: 'main'
    })
    .state('aboutUs', {
        url: 'aboutUs',

        views:{
            templateUrl: 'Views/aboutUs/aboutUs.html'
        },
        parent: 'main'
    })
});
// template and assets should be in assets