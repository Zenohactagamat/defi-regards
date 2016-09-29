'use strict';

/**
 * @ngdoc service
 * @name defiApp.AnimalCollection
 * @description
 * # AnimalCollection Model
 * Defines all animal interactions
 */

// Load service
angular.module('defiApp')
  .service('animalCollection', ['Reptile', 'Mammal', 'Bird', function(Reptile, Mammal, Bird) {
    // Constructor
    function AnimalCollection(Reptile, Mammal, Bird) {
      this.collection = [];
    }

    // Get animal
    AnimalCollection.prototype.get = function(id) {
      return this.collection[id];
    };

    // Get animals list
    AnimalCollection.prototype.getList = function() {
      return this.collection;
    };

    // Add animal
    AnimalCollection.prototype.add = function(type, abilities) {
      var animal = this.set(type, abilities);
      this.collection.push(animal);
    };

    // Set animal
    AnimalCollection.prototype.initAnimal = function(type, name, skinInfo) {
      var animal;

      switch (type) {
        case 'reptile':
          animal = new Reptile(name, skinInfo);
          break;
        case 'mammal':
          animal = new Mammal(name, skinInfo);
          break;
        case 'bird':
          animal = new Bird(name, skinInfo);
          break;
      }

      return animal;
    };

    // Remove animal
    AnimalCollection.prototype.remove = function(id) {
      delete this.collection[id];
    };

    // Update animal
    AnimalCollection.prototype.update = function(id, data) {
      this.collection[id].setName(data.name);
      this.collection[id].setSkinInfo(data.skinInfo);
    };

    return new AnimalCollection();
  }]);