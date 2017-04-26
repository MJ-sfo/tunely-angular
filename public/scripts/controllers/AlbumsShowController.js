angular
  .module('tunely')
  .controller('AlbumsShowController', AlbumsShowController);

//  To use $routeParams, we $inject it in the controller.   AlbumsShowController.$inject = ['$http'];
AlbumsShowController.$inject = ['$http', '$routeParams'];
function AlbumsShowController (  $http,   $routeParams  ) {
  var vm = this;
  console.log($routeParams);

  $http({
    method: 'GET',
    url: '/api/albums/'+  // how can we get the id? (hint: check console log from above)
  }).then(function successCallback(json) {
    vm.album = json.data;
  });
}  //function AlbumsShowController 

function AlbumsShowController ($http) {
  var vm = this;
  vm.newAlbum = {};
  vm.newAlbum = {
    name: 'Viva Hate',
    artistName: 'Morrissey'
  };

  $http({
    method: 'GET',
    url: '/api/albums'
  }).then(function successCallback(response) {
    vm.albums = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  vm.createAlbum = function () {
    $http({
      method: 'POST',
      url: '/api/albums',
      data: vm.newAlbum,
    }).then(function successCallback(response) {
      vm.albums.push(response.data);
    }, function errorCallback(response) {
      console.log('There was an error posting the data', response);
    });
  }

  vm.editAlbum = function (album) {
    $http({
      method: 'PUT',
      url: '/api/albums/'+album._id,
      data: album
    }).then(function successCallback(json) {
      // don't need to do anything!
    }, function errorCallback(response) {
      console.log('There was an error editing the data', response);
    });
  }

  vm.deleteAlbum = function (album) {
    $http({
      method: 'DELETE',
      url: '/api/albums/'+ album._id
    }).then(function successCallback(json) {
      var index = vm.albums.indexOf(album);
      vm.albums.splice(index,1)
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  }

}  //  function AlbumsShowController ($http)
