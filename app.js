var Routing = angular.module('Routing', ['ui.router']);

Routing.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
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
            },
        })
    .state('home', {
        url: 'home',
        templateUrl: 'Views/home/homeView.html',
        parent: 'main'
    })
    .state('course', {
        url: 'course',
        templateUrl: 'Views/courses/courseView.html',
        parent: 'main'
    })
    .state('blog', {
        url: 'blog',
        templateUrl: 'Views/blog/blogView.html',
        parent: 'main'
    })
    .state('aboutUs', {
        url: 'aboutUs',
        templateUrl: 'Views/aboutUs/aboutUs.html',
        parent: 'main'
    })
});
// template and assets should be in assets