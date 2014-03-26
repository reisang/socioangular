/**
 * Created by Reisang.Risom on 19/3/14.
 */
var app = angular.module("socialApp");
app.factory("socialFactory",['$http',function($http){
    /*  return $resource("http://localhost/athena/setting/group/categories",{},
        {
            get: { method: "GET" ,isArray: true}
        })*/
        return {
            getTimeLine:function(){
                var result =$http.get('http://localhost/social/twitter/timeline',{});
                return  result;
            },
            getQuery:function(){
                var result =$http.get('http://localhost/social/twitter/search',{});
                return  result;
                },
            postFeedback:function(data){
                $http.post('http://localhost/social/feedback/message',data);
            },
            getFeedbacks:function(){
                return $http.get('http://localhost/social/feedback/message',{});
            }
        }

}])
