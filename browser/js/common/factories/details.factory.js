app.factory('DetailsFactory', function($http, $stateParams) {
    return {
        getDetails: function(appId, bugId) {
            return $http.get('/api/applications/' + appId + '/bugs/' + bugId)
                .then(function(response) {
                    return response.data;
                });
        },
        updateBug: function(appId, bugId, updates) {
            var appId = $stateParams.appId;
            var bugId = $stateParams.bugId;
            return $http.put('/api/applications/' + appId + '/bugs/' + bugId, updates)
                .then(function(response) {
                    return response.data;
                });
        },
        addGitIssue: function(appID, issueBody){
            var appId = $stateParams.appId;
            return $http.post('/api/applications/'  + appId + '/bugs/add_issue',  issueBody)
                .then(function(response) {
                    return response.data;
                });
        }
    };
});
