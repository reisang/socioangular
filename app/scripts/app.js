'use strict';

var app = angular.module('socialApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
]);

app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/")
    $stateProvider
        .state("home",{
        url:"/",
        templateUrl:"views/main.html",
        controller:"MainCtrl"
        }).state("postfeed",{
            url:"/postfeedback",
            templateUrl:"views/feedback.html",
            controller:"FeedbackCtrl"
        })
        .state("listfeedback",{
            url:"/listfeedback",
            templateUrl:"views/feedback-list.html",
            controller:"FeedbackCtrl"
        })
        .state("listfeedback.message",{
            url:"/message?index",
            templateUrl:"views/message.html",
            controller:"MessageCtrl"
        })
        .state("databinding",{
            url:"/databinding",
            templateUrl:"views/databinding.html",
            controller:"BindingCtrl"
        })
        .state("directives",{
            url:"/directives",
            templateUrl:"views/tweets.html",
            controller:"QueryCtrl"
        })
        .state("multiview",{
            url:"/multiview",
            views:{
                     '': {
                        templateUrl: 'views/multiview.html',
                        controller: 'MainCtrl'
                    },
                    'firstview@multiview': {
                        templateUrl: 'views/firstview.html',
                        controller: 'MainCtrl'
                    },
                    "secondview@multiview": {
                        templateUrl: "views/secondview.html"
                    },
                    "thirdview@multiview": {
                        templateUrl: "views/thirdview.html"
                    }
             }
        })
});

