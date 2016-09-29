'use strict';

/**
 * @ngdoc service
 * @name defiApp.Animal
 * @description
 * # Animal Model
 * Defines all animal interactions
 */

// Constructor
function Animal(name) {
  this.name = name;
}

// Animal can speak
Animal.prototype.speak = function() {
  return 'Je suis un ' + this.name;
};

// Animal can speak
Animal.prototype.setName = function(name) {
  this.name = name;
};

/*
// Reptile
*/

function Reptile(name, scale) {
  Animal.call(this, name);
  this.scale = scale;
  this.skinLabel = 'mes écailles sont';
}

Reptile.prototype = Object.create(Animal.prototype);

// Animal can speak
Reptile.prototype.speak = function() {
  return this.hiss();
};

// Special cry
Reptile.prototype.hiss = function() {
  return 'Je sssuis un ' + this.name;
};

// Get skin info
Reptile.prototype.getSkinInfo = function(data) {
  return this.scale;
};

// Update skin info
Reptile.prototype.setSkinInfo = function(data) {
  this.scale = data;
};

/*
// Mammal
*/

function Mammal(name, fur) {
  Animal.call(this, name);
  this.fur = fur;
  this.skinLabel = 'ma fourrure est';
}

Mammal.prototype = Object.create(Animal.prototype);

// Animal can speak
Reptile.prototype.speak = function() {
  return this.growl();
};

// Special cry
Mammal.prototype.growl = function() {
  return 'Je grrrr suis un ' + this.name;
};

// Get skin info
Mammal.prototype.getSkinInfo = function(data) {
  return this.fur;
};

// Update skin info
Mammal.prototype.setSkinInfo = function(data) {
  this.fur = data;
};

/*
// Bird
*/

function Bird(name, feathers) {
  Animal.call(this, name);
  this.feathers = feathers;
  this.skinLabel = 'mon plumage est';
}

Bird.prototype = Object.create(Animal.prototype);

// Animal can speak
Reptile.prototype.speak = function() {
  return this.tweet();
};

// Special cry
Bird.prototype.tweet = function() {
  return 'Je suis cuicui un ' + this.name;
};

// Get skin info
Reptile.prototype.getSkinInfo = function(data) {
  return this.feathers;
};

// Update skin info
Bird.prototype.setSkinInfo = function(data) {
  this.feathers = data;
};

// Load services
angular.module('defiApp')
  .service('Reptile', function() {
    return Reptile;
  })
  .service('Mammal', function() {
    return Mammal;
  })
  .service('Bird', function() {
    return Bird;
  });