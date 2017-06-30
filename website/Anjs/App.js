// Define the application module, which relies on controller module and 3rd party ui.router module
angular.module('app', ['controllers', 'services', 'smart-table', 'ui.router']);

// Configure the routes
angular.module('app').config(function ($stateProvider, $urlRouterProvider) { // $stateProvider and $urlRouterProvider are from ui.router
    $stateProvider


        .state('Details', {
            url: '/Details',
            controller: 'DetailsController',
            templateUrl: 'Details.html'
        })

        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html',
            controller: function($scope) {
                $(function () {
                    $('[data-toggle="table"]').bootstrapTable();
                });
            }
        })

});
