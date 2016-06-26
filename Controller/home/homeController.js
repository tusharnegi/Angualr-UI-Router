//controller

Routing.controller('homeController', ['$scope', '$state', 'homeService', function ($scope, $state, homeService) {

    //alert("HomeController");

    $scope.homeData = homeService;



    $scope.reload = function ($state) {
        alert("inside reload");

        //$state.transitionTo($state.current, $stateParams, { reload: true, inherit: false })

        //$state.go($state.current, {}, { reload: true });
        //$state.reload('blog');
        //$state.transitionTo('blog');
       // $state.reload($state.current.name);
        //window.location.reload(true)
        //$window.location.href = '/';
        for (element in homeService) {
           delete homeService[element];
        }
        //Reflect.deleteProperty(homeData);
        //homeData = null;
        //delete homeData;
        //$scope.homeData = homeService;
       // $state.transitionTo('home', null, { 'reload': true });

    };
}]);