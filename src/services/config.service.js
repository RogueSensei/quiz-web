angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'quiz-api-cge.us-east-2.elasticbeanstalk.com/';

    return service;
}]);