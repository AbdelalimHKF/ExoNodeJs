var exo_app = angular.module('exo_app', []);
exo_app.controller("MainCtrl",mainController);

function mainController($scope, $http) {
    $scope.visible=false;
    $scope.response="";
    $scope.jeu={};
    

    $http.get('/jeu').then(successCallback, errorCallback);

    function successCallback(response){
        //success code
        $scope.jeu = response.data;
        console.log(response);
    }
    function errorCallback(error){
    //error code
    console.log('Error: ' + error);
    }

    $scope.oui= function(){
        $scope.response=$scope.jeu.goodResp;
        $scope.visible=!$scope.visible;
    }

    $scope.non= function(){
        $scope.response=$scope.jeu.badResp;
        $scope.visible=!$scope.visible;
    }

}
