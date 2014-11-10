'use strict';

angular.module('userService', ['config']).factory('User', function($http, $rootScope, $location, $cookieStore, apiendpoint) {

    return {
        login: function(user) {
            return $http.post(apiendpoint + '/users/login', user);
        },
        signup: function(user) {
            return $http.post(apiendpoint + '/users/signup', user);
        }
    };
});