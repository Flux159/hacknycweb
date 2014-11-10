'use strict';

angular.module('loginController', ['userService'])
    .controller('LoginCtrl', function ($scope, User, $location, $cookieStore, $rootScope, $cookies) {

        $scope.testing = 'blah';

        $scope.user = {};

        $scope.login = function() {
            User.login({username: $scope.user.username, password: $scope.user.password}).then(function(res) {

                var maxAge = "; max-age=" + 24 * 60 * 60 * 90 + ";path=/;";

                console.log(res.data);
                // Account created, set cookie & redirect to home
                document.cookie = 'user=' + JSON.stringify(res.data.user) + maxAge;
                document.cookie = 'token=' + res.data.token + maxAge;

                $location.path('/');

                //TODO: Check return data & see if you need to go to create new group page or items page

            }).catch(function(err) {

                //TODO: Handle error

            });
        };

    });