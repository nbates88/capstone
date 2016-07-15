app.config(function ($stateProvider) {
    $stateProvider.state('allApps', {
        url: '/applications',
        templateUrl: 'js/applications/allApps.html',
        controller: 'AllAppsCtrl',
        resolve: {
            allApps: function(AppFactory){
                return AppFactory.fetchAllApps();
            }
        }
    });
});
app.controller('AllAppsCtrl', function($scope, allApps, AppFactory) {
    $scope.allApps = allApps;
    $scope.appId;
    console.log($scope.appId)
        // $scope.currentApp = function(appId) {
        //     console.log(appId)
        //     return app.id

    //     // AppFactory.fetchAllBugs(app.id)
    //      // console.log(AppFactory.fetchAllBugs(app.id))
    // //     //  .then(function(foundBugs){
    // //     // console.log("bugs", foundBugs)
    // //     // return foundBugs.length
    // // })
    // };

});


//can we eliminate these repetitive methods between states?
