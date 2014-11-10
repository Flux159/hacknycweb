'use strict';

angular.module('itemsController', ['userService'])
    .controller('ItemsCtrl', function ($scope, User, $location, $cookieStore, $rootScope, $cookies) {

        $scope.testing = 'blah';

    });