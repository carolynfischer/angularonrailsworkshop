// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require_tree .

console.log("Works!")

var fakeData = [
	{ email: "carolyna@carolyn.ee", body: "A question by A" },
	{ email: "carolynb@carolyn.ee", body: "A question by B" },
	{ email: "carolync@carolyn.ee", body: "A question by C" },
	{ email: "carolynd@carolyn.ee", body: "A question by D" }
];

var AoRApp = angular.module('AoR', [])
.controller('MainController', 
function($scope, $http) {
  $scope.var1 = 'CodingHouse';
  // $scope.questions = fakeData;
  $http.get("/questions").then(function(response){
    debugger;
    $scope.questions = response.data;
  });

  $scope.addQuestion = function() {
    debugger;
    $http.post("/questions", {
	email: $scope.email,
        body: $scope.body
    }).success(function(data) {
        console.log(data);
        $scope.questions.push(data);
        $("#askQuestionModel").hide();
    }).error(function(error) {
        console.log(error);
    })
  } 
});

