/**
 * Created by Reisang.Risom on 25/3/14.
 */
var app = angular.module("socialApp")
app.directive("tweetShow",function(){
    return {
        restrict:'AEC',
        replace:true,
        templateUrl:'templates/tweetTemplate.html',
        link:function(scope,elem,attrs){
            elem.bind('click',function(){
                var source = scope.tweet.source
                elem.append(source)
            })
        }
    }
})