app.config(function ($stateProvider) {
    $stateProvider.state('appUsers', {
        url: '/applications/:appID/users',
        templateUrl: 'js/users/users.html',
        controller: 'UsersCtrl',
        resolve: {
            allUsers: function(AppFactory, $stateParams){
                var appID = $stateParams.appID;
                return AppFactory.fetchAllUsers(appID);
            },
            appData: function(AppFactory, $stateParams){
                return AppFactory.fetchCurrentApp($stateParams.appID);
            },
            allApps: function(AppFactory){
                return AppFactory.fetchAllApps();
            }
        }
    });
});

app.controller('UsersCtrl', function($scope, allUsers, appData, AppFactory, allApps) {
    $scope.allUsers = allUsers;
    $scope.appData = appData;
    $scope.allApps = allApps;
    $scope.invite = function(userObj) {
        AppFactory.inviteUser(appData.id, userObj)
            .then(function(response) {
                response.status === 201 ? $scope.inviteStatus = true : $scope.inviteStatus = false;
            });
    };
    $scope.updateUser = function(userObj) {
        AppFactory.updateUser(appData.id, userObj)
            .then(function(response) {
                response.status === 201 ? $scope.updateStatus = true : $scope.updateStatus = false;
            });
    };
    $scope.removeUser = function(userObj) {
        var userIndex = $scope.allUsers.indexOf(userObj);
        AppFactory.removeUser(appData.id, userObj.id)
            .then(function(response) {
                $scope.allUsers.splice(userIndex, 1);
            });
    };
});