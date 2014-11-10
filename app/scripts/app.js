'use strict';

angular.module('hacknycapp', [
    'loginController',
    'signupController',
    'addgroupController',
    'itemsController',
    'accountController',
    'userService',
    'config',
    'ngRoute',
    'ngTouch',
    'ngSanitize',
    'ngResource',
    'ngCookies'
]).config(function($routeProvider, $locationProvider, $httpProvider, $sceDelegateProvider) {

    var routeprefix = '';
    $routeProvider
        .when(routeprefix + '/', {
            templateUrl: 'partials/login.html',
            controller: 'LoginCtrl'
        })
        .when(routeprefix + '/signup', {
            templateUrl: 'partials/signup.html',
            controller: 'SignupCtrl'
        })
        .when(routeprefix + '/groups/add', {
            templateUrl: 'partials/addgroup.html',
            controller: 'AddGroupCtrl'
        })
        .when(routeprefix + '/groups/:groupid', {
            templateUrl: 'partials/items.html',
            controller: 'ItemsCtrl'
        })
        .when(routeprefix + '/account', {
            templateUrl: 'partials/account.html',
            controller: 'AccountCtrl',
            authenticate: true
        });

    //Intercept request to add header for Authorization when token cookie is set.

    $httpProvider.interceptors.push([function() {
        return {
            request: function(config) {
                config.headers = config.headers || {};
                var cookies = document.cookie.split(';');
                var token = null;
                cookies.forEach(function(cookie) {
                    if(cookie.indexOf('token') !== -1) {
                        token = cookie;
                    }
                });

                var awsrequest = config.url.indexOf("s3.amazonaws") > -1;

                if (token && !awsrequest) {
                    token = token.substring(token.indexOf('=')+1);
                    config.headers.Authorization = 'Bearer ' + token;
                }
                return config;
            }
        }
    }]);

}).run(function($rootScope, $location, User, $cookieStore, $cookies) {

    $rootScope.currentUser = $cookieStore.get('user') || null;

    $rootScope.$watch(function () {
        return $cookies.user;
    }, function (newValue) {
//            console.log('Cookie changed:' + newValue);
        if (newValue !== undefined) {
            //Logging in (they'll be redirected)
            $rootScope.currentUser = JSON.parse(newValue);
//            Profile.updateProfile();
        } else {
            //Logging out
            $rootScope.currentUser = newValue;
        }
    });

    $rootScope.showPage = function(link) {
        $location.path(link);
    };

    $rootScope.logout = function() {
        $rootScope.currentUser = null;
        $cookieStore.remove('user');
        $cookieStore.remove('token');
    };

});
