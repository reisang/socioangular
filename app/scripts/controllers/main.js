'use strict';

var app = angular.module('socialApp' );

app.controller('MainCtrl',function ($scope,socialFactory) {
        $scope.getTweets = function(){
            socialFactory.getTimeLine().then(function(result){
                $scope.tweets = result.data;
            });

        }
});
app.controller('QueryCtrl',function ($scope,socialFactory) {
    $scope.getTweets = function(){
         socialFactory.getQuery().then(function(result){
            $scope.tweets = result.data;
        });

    }
});
app.controller('FeedbackCtrl',function ($scope,socialFactory,feedService) {
     $scope.postFeedback = function(){
         socialFactory.postFeedback($scope.message);
     }
    socialFactory.getFeedbacks().then(function(result){
        $scope.feedbacks = result.data;
    })

    $scope.setSelected = function(message){
        feedService.message = message;
    }
});
 app.controller('MessageCtrl',function ($scope,feedService) {
     $scope.message = feedService.message;
  });

app.controller('BindingCtrl',function ($scope,feedService) {
    $scope.address = {
        number:233,
        street:"Hamton Stree",
        city:"bangalore"
    };
    $scope.$watch( 'address',function(newVal,oldVal){
        console.info( newVal);
    },true)
});



