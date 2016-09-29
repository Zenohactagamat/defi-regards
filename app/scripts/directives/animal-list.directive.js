'use strict';
/* jshint -W098 */

/**
 * @ngdoc directive
 * @name alissApp.defiAnimalList
 * @description
 * # Animal list directive
 * Manage animal list
 */

angular.module('defiApp')
  .directive('defiAnimalList', function() {
    return {
      restrict: 'E',
      templateUrl: 'scripts/directives/animal-list.html',
      replace: true,
      transclude: false,
      scope: {
        // seniorId: '='
      },
      controller: function($scope, animalCollection) {
        //
        // Variables
        //

        $scope.list = animalCollection.getList();

        //
        // Methods
        //

        $scope.add = function(data) {
          var animal = animalCollection.initAnimal(data.type, data.name, data.skinInfo);
          animalCollection.add(animal);
        };

        $scope.edit = function(id, data) {
          animalCollection.update(id, data);
        };

        $scope.delete = function(id) {
          animalCollection.remove(id);
        };
      }
    };
  });