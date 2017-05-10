(function () {
var myApp = angular.module('ListTracksApp', []);
myApp.controller('MusicController', MusicController);
myApp.service('MusicService', MusicService);
MusicController.$inject = ['MusicService'];

function MusicController(MusicService){
  var list = this;
  var promise = MusicService.getTracks();
  promise.then(function(response) {
    // console.log(response);
    list.tracks = response.data.results;
    console.log(list.tracks[0].title);
  })
  .catch(function(error){
    console.log("Something went wrong!");
  });


}


MusicService.$inject = ['$http'];
function MusicService($http) {
  var service = this;
  service.getTracks = function(){
    var response = $http({
      method: "GET",
      url: "http://104.197.128.152:8000/v1/tracks"
    });
    return response;
  };
}
})();