'use strict';

/**
 * @ngdoc function
 * @name darsiaFrontApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the darsiaFrontApp
 */
angular.module('darsiaFrontApp')
  .controller('MapCtrl', ['$scope', function ($scope) {
    $scope.map = {
      id: 33, // Map id
      name: 'Farm Map',
      description: 'Este mapa es una prueba, esto que estas leyendo es la descripción del mismo',
      img: 'https://dl.dropboxusercontent.com/u/105638235/map1.png',
      spots: [
        {x:0, y:1}, //X,Y position of map spot, 'door' is when the spot go to another map
        {x:1, y:0},
        {x:1, y:1},
        {x:1, y:2},
        {x:1, y:3},
        {x:1, y:4},
        {x:1, y:5},
        {x:1, y:6},
        {x:1, y:7},
        {x:2, y:1},
        {x:2, y:6},
        {x:3, y:1},
        {x:3, y:2},
        {x:3, y:3},
        {x:3, y:4},
        {x:3, y:5},
        {x:3, y:6},
        {x:4, y:1, door:{
          doorName: "Ice Map Portal", // Door name
          lvlReq: 12, // Level required to use this door
          titleReq: "Ice Combatant", // Title required to use this door
          cityReq: 1, // Id of the city required to use this portal
        }},
        {x:4, y:4},
        {x:5, y:1},
        {x:5, y:4},
        {x:6, y:0},
        {x:6, y:1},
        {x:6, y:2},
        {x:6, y:3},
        {x:6, y:4},
        {x:6, y:5},
        {x:6, y:6},
        {x:6, y:7},
        {x:7, y:1}
      ]
    };
  }]);
