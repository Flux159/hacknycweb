'use strict';

angular.module('addgroupController', ['userService', 'groupService'])
    .controller('AddGroupCtrl', function ($scope, User, Group, $location, $cookieStore, $rootScope, $cookies) {

//        $scope.testing = 'blah';

        //TODO: Need to know the state of where I came from (from signup or from the icon in account)

        $scope.changeCreatingGroup = function() {
            $scope.creatingGroup = !$scope.creatingGroup;
        };

        $scope.group = {users: [], name: ''};
        $scope.newuserObject = {};

        $scope.addUser = function() {

            console.log($scope.newuserObject.user);
            $scope.group.users.push($scope.newuserObject.user);
            $scope.newuserObject.user = '';

            console.log($scope.group.users);
        };

        $scope.removeUser = function(index) {
            $scope.group.users.splice(index, 1);
        };

        $scope.createGroup = function() {
            //TODO: Need to add current User to list of users (at front), then create group w/ backend call

            var submitData = {users: $scope.group.users, name: $scope.group.name};
            submitData.users.unshift($rootScope.currentUser.username);

            Group.create(submitData).then(function(res) {

                //Go to items page for this group

            }).catch(function(err) {

            });

        };

    });