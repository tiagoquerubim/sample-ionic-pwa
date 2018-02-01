angular.module('starter.controllers', [])


.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('DashCtrl', ['$scope', '$stateParams','TransitoSeguroService',  '$ionicLoading',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, TransitoSeguroService, $ionicLoading) {
 $ionicLoading.show();
TransitoSeguroService.obterDicas("1").then(function(dados){
  console.log(dados);
    $scope.dicas = dados; 
     $ionicLoading.hide();
  })
  
  $scope.colorCodeArray = [
         "#77BBFF",
         "#8CC63F",
         "#B292C4",
         "#F0C508",
         "#F7941E",      
         "#2BB673",       
         "#EF3E36",
         "#743F98",
         "#13A89E",
    ];
    
}]);
