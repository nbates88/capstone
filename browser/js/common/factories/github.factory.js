app.factory('GithubFactory', function($http) {
    return {
        getAllRepos: function(appID) {
            return $http.get('/api/applications/' + appID + '/github')
                .then(function(response) {
                    return response.data;
                });
        },
        addRepoId: function(appID, repoIdObj){
            return $http.put('/api/applications/'  + appID,  repoIdObj)
                .then(function(response) {
                    return response.data;
                });
        }
    };
});
