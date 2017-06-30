angular.module('services', []);

const API_NULL = '/cqePower/api/null';
const API_RESULTS = '/cqePower/api/results';
const API_OPTIONS = '/cqePower/api/options';
const API_DRIVER = '/cqePower/api/driver';
const API_ASIC = '/cqePower/api/asic';
const API_BASELINES = '/cqePower/api/baselines';
const API_RUN = '/cqePower/api/run';

// Define Factory services for getting the promotion status options from back-end.
angular.module('services').factory('apiFactory', ['$http', apiFactory]);

function apiFactory($http) {



    function getResults(){
           return $http.get(API_RESULTS);

    }
    function getOptions(){
        return $http.get(API_OPTIONS);

    }
    function getDriver(){
        return $http.get(API_DRIVER);
    }

    function getAsic(){
        return $http.get(API_ASIC);
    }

    function getBaselines(){
        return $http.get(API_BASELINES);
    }
    function getRun(runId){
        if(runId != null){
            return $http.get(API_RUN + '/' + runId);
        }
        else {
            return $http.get(API_NULL);
        }
    }
    var service = {
        // promotion status
        getResults: getResults,
        getOptions: getOptions,
        getDriver:getDriver,
        getAsic:getAsic,
        getBaselines:getBaselines,
        getRun:getRun

    };
    return service;
}
