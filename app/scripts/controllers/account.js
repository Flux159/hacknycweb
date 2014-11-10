'use strict';

angular.module('accountController', ['userService'])
    .controller('AccountCtrl', function ($scope, User, $location, $cookieStore, $rootScope, $cookies) {

        $scope.testing = 'blah';

    });