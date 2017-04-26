/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */


// move everything to scrpts/conrollers/AlbumsIndexController
angular
  .module('tunely', ['ngRoute'])
  .config(config)

  //  sprint 4, added 'ngRoute' and '.config(config)' above, needs to be defined bellow:
config.$inject = ['$routeProvider', '$locationProvider'];
    //   above defines angular hard-coded terms.  below, could use any name for these variables
function config(   $routeProvider,  $locationProvider   ) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/albums',
      controllerAs: 'albumsIndexCtrl',
      controller: 'AlbumsIndexController'
    })
    .when('/albums/:id', {
      templateUrl: 'This template will show an album!',
      controllerAs: 'albumsShowCtrl',
      controller: 'AlbumsShowController'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}    //       function config(
