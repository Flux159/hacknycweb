'use strict';

angular.module('groupService', ['config']).factory('Group', function($http, $rootScope, $location, $cookieStore, apiendpoint) {

    var createGroupState = false;

    return {
        setCreateGroupState: function(value) {
            createGroupState = value;
        },
        getCreateGroupState: function() {
            return createGroupState;
        },
        create: function(group) {
            return $http.post(apiendpoint + '/groups/create', group);
        },
        index: function() {
            return $http.get(apiendpoint + '/auth/groups');
        }

//        login: function(user) {
//            return $http.post(apiendpoint + '/users/login', user);
//        },
//        signup: function(user) {
//            return $http.post(apiendpoint + '/users/signup', user);
//        }
    };
});