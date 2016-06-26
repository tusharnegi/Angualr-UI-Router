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
        controller: 'homeController',
        parent: 'main'
    })
    .state('course', {
        url: 'course',
        templateUrl: 'Views/courses/courseView.html',
        controller:'courseController',
        parent: 'main'
    })
    .state('blog', {
        url: 'blog',
        templateUrl: 'Views/blog/blogView.html',
        controller: 'blogController',
        parent: 'main'
    })
    .state('aboutUs', {
        url: 'aboutUs',
        templateUrl: 'Views/aboutUs/aboutUsView.html',
        controller: 'aboutUsController',
        parent: 'main'
    })
     //view for this is not added
    .state('quiz', {
        url: 'quiz',
        templateUrl: 'Views/quiz/quizView.html',
        controller: 'quizController',
        parent: 'main'
    })
});
// template and assets should be in assets