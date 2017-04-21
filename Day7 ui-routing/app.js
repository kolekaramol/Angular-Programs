var app = angular.module('myApp', ['ui.router']);

app.config(function( $urlRouterProvider, $stateProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'home.html',
            
        }).state('aboutus', {
            url: '/aboutus',
             templateUrl: 'aboutus.html'          
        }).state('service', {
            url: '/service',
            templateUrl: 'service.html'
        }).state('service.service1', {
            url: '/service1',
            templateUrl: 'service1.html'
        }).state('service.service2', {
            url: '/service2',
            templateUrl: 'service2.html'
        }).state('service.service3', {
            url: '/service3',
            templateUrl: 'service3.html'
        }).state('service.service4', {
            url: '/service4',
            templateUrl: 'service4.html'
        });
        
});

