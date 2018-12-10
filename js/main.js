var app = angular.module("app", ['ngAnimate', 'ngRoute']);

//          ROUTING
app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "./work.htm",
        controller: "ProjectController"
    }).when("/fitbrain", {
        templateUrl: "./projects/fitbrain.htm",
        controller: "IndividualController"
    }).when("/swasthyaa", {
        templateUrl: "./projects/swasthyaa.htm",
        controller: "IndividualController"
    }).when("/wordtutor", {
        templateUrl: "./projects/wordtutor.htm",
        controller: "IndividualController"
    }).when("/vatsalya", {
        templateUrl: "./projects/vatsalya.htm",
        controller: "IndividualController"
    }).when("/ahaar", {
        templateUrl: "./projects/ahaar.htm",
        controller: "IndividualController"
    }).when("/sas", {
        templateUrl: "./projects/sas.htm",
        controller: "IndividualController"
    }).when("/chargeit", {
        templateUrl: "./projects/chargeit.htm",
        controller: "IndividualController"
    }).otherwise({
        redirectTo: "/"
    });
});

//          Individual Controller
app.controller("IndividualController",function($scope,$location,$anchorScroll) {
    $anchorScroll($location.hash());
});

//          Project Controller
app.controller("ProjectController", function($scope,$http,$timeout) {

    window.onload = $http.get("./js/projects.json").then(function (response) {
        dealWithResponse(response, $scope, $timeout);
    });

    // TypeWriter Effect
    var txt = "Namaste, I'm Arpit";
    var i = txt.length;
    var speed = 50;
    var temp = "";
    function typeWriter() {
        temp += txt.charAt(i);
        if (i >= 0) {
            document.getElementById("demo").innerHTML = temp.split("").reverse().join("");
            i--;
            $timeout(typeWriter, speed);
        }
    }    
    window.onload = $timeout(typeWriter, 1000);
    
});

//          About Controller
app.controller("AboutController",function($scope,$http,$timeout) {
    
    // TypeWriter Effect
    var txt = "A little about me...";
    var i = txt.length;
    var speed = 50;
    var temp = "";
    function typeWriter() {
        temp += txt.charAt(i);
        if (i >= 0) {
            document.getElementById("demo").innerHTML = temp.split("").reverse().join("");
            i--;
            $timeout(typeWriter, speed);
        }
    }    
    window.onload = $timeout(typeWriter, 1000);
});

//          LOADING PROJECTS
var dealWithResponse = function(response, $scope, $timeout) {
    var all_projects = response.data.projects;   
    var academic = [];
    var side = [];
    var intern = [];
    $scope.hide = function(num1,num2) {
        if (num1 === num2) {
            return false;
        } else {
            return true;
        }
    }
    $scope.num = 1;

    for (var i=0; i<all_projects.length; i++) {
        if (all_projects[i].tag === "academic") {
            academic.push(all_projects[i]);
        } else if (all_projects[i].tag === "internship") {
            intern.push(all_projects[i]);
        } else if (all_projects[i].tag === "side project") {
            side.push(all_projects[i]);
        } else {
            console.log("error", all_projects[i]);
        }
    }

    $scope.projects = all_projects;
    $scope.intern = intern;
    $scope.side = side;
    $scope.academic = academic;
    
    $scope.allStyle = "filter-item-active"; 
    $scope.sideStyle = "filter-item";
    $scope.internStyle = "filter-item";
    $scope.acadStyle = "filter-item";
    $scope.allContent = "_all projects"; 
    $scope.sideContent = "side projects";
    $scope.internContent = "internships";
    $scope.acadContent = "academics";

    $scope.showAcad = function() {
        $scope.num = 2;
        $scope.allStyle = "filter-item"; 
        $scope.sideStyle = "filter-item";
        $scope.internStyle = "filter-item";
        $scope.acadStyle = "filter-item-active";
        $scope.allContent = "all projects"; 
        $scope.sideContent = "side projects";
        $scope.internContent = "internships";
        $scope.acadContent = "_academics";
    }
    $scope.showSide = function() {
        $scope.num = 3;
        $scope.allStyle = "filter-item"; 
        $scope.sideStyle = "filter-item-active";
        $scope.internStyle = "filter-item";
        $scope.acadStyle = "filter-item";
        $scope.allContent = "all projects"; 
        $scope.sideContent = "_side projects";
        $scope.internContent = "internships";
        $scope.acadContent = "academics";
    }
    $scope.showIntern = function() {
        $scope.num = 4;
        $scope.allStyle = "filter-item"; 
        $scope.sideStyle = "filter-item";
        $scope.internStyle = "filter-item-active";
        $scope.acadStyle = "filter-item";
        $scope.allContent = "all projects"; 
        $scope.sideContent = "side projects";
        $scope.internContent = "_internships";
        $scope.acadContent = "academics";
    }
    $scope.showAll = function() {
        $scope.num = 1;
        $scope.hide = [false,true,true,true];
        $scope.allStyle = "filter-item-active"; 
        $scope.sideStyle = "filter-item";
        $scope.internStyle = "filter-item";
        $scope.acadStyle = "filter-item";
        $scope.allContent = "_all projects"; 
        $scope.sideContent = "side projects";
        $scope.internContent = "internships";
        $scope.acadContent = "academics";
    }
}