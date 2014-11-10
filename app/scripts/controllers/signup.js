'use strict';

angular.module('signupController', ['userService'])
    .controller('SignupCtrl', function ($scope, User, $location, $cookieStore, $rootScope, $cookies) {

//        $scope.testing = 'blah';

        function generateUUID(){
            var d = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = (d + Math.random()*16)%16 | 0;
                d = Math.floor(d/16);
                return (c=='x' ? r : (r&0x7|0x8)).toString(16);
            });
            return uuid;
        }

        $scope.user = {};

        $scope.register = function() {
            User.signup({username: $scope.user.username, password: $scope.user.password, device_id: generateUUID()}).then(function(res) {

                var maxAge = "; max-age=" + 24 * 60 * 60 * 90 + ";path=/;";

                console.log(res.data);
                // Account created, set cookie & redirect to home
                document.cookie = 'user=' + JSON.stringify(res.data.user) + maxAge;
                document.cookie = 'token=' + res.data.token + maxAge;

                $location.path('/');

//                $rootScope.$emit('updateMessagesNavbar');
//
//                if($location.path() === '/') {
//                    $route.reload();
//                } else {
//                    $location.path('/');
//                }

            }).catch(function(err) {

            });
        };

    });