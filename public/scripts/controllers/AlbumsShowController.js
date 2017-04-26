angular
  .module('tunely')
  .controller('AlbumsShowController', AlbumsShowController);

//  To use $routeParams, we $inject it in the controller.   AlbumsShowController.$inject = ['$http'];
AlbumsShowController.$inject = ['$http', '$routeParams'];
function AlbumsShowController (  $http,   $routeParams  ) {
  var vm = this;
  vm.newSong = {};
  console.log($routeParams);

  $http({
    method: 'GET',
    url: '/api/albums/'+$routeParams.id
  }).then(function successCallback(json) {
    vm.album = json.data;
  });

  $http({
    method: 'GET',
    url: '/api/albums'+$routeParams.id
  }).then(function successCallback(response) {
    vm.albums = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

}  //  function AlbumsShowController ($http)
