'use strict';

angular.module('yggdrasilQuizApp')
  .controller('MainCtrl', function ($scope, $http, $location) {
    $http.get('/api/questions').success(function (questions) {
      $scope.questions = questions;
    });

    $scope.formCompleted = function () {
      var completed = true;
      angular.forEach($scope.questions, function (question) {
        if (!question.alternative) {
          completed = false;
        }
      });
      return completed;
    };

    $scope.submit = function () {
      var allCorrect = true;
      angular.forEach($scope.questions, function (question) {
        var alternative = JSON.parse(question.alternative);
        if (!alternative.correct) {
          console.log('Incorrect response: ' + JSON.stringify(alternative));
          allCorrect = false;
        }
      });

      if (allCorrect) {
        $location.path('/success');
      } else {
        $location.path('/sorry');
      }
    };
  });
