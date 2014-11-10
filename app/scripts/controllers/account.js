'use strict';

angular.module('accountController', ['userService'])
    .controller('AccountCtrl', function ($scope, User, $location, $cookieStore, $rootScope, $cookies) {

        $scope.testing = 'blah';

        //List all groups for account & allow user to browse to that group's item page

    });