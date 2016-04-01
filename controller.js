app.controller('appController', function($scope) {
    $scope.hello = "hello";

    $scope.people = [];
    $scope.me = {};
    $scope.matches = [];

    $scope.people.push(new person("Stephanie", $scope.people.length + 1, 25, "Female", 9))
    $scope.people.push(new person("Jenny", $scope.people.length + 1, 30, "Female", 6))
    $scope.people.push(new person("Alexandra", $scope.people.length + 1, 26, "Female", 8))
    $scope.people.push(new person("Coleen", $scope.people.length + 1, 28, "Female", 10))
    $scope.people.push(new person("Aaron", $scope.people.length + 1, 45, "Male", 8))
    $scope.people.push(new person("Eric", $scope.people.length + 1, 35, "Male", 6))
    $scope.people.push(new person("Seth", $scope.people.length + 1, 50, "Male", 9))
    $scope.people.push(new person("Lee", $scope.people.length + 1, 27, "Male", 7))
    $scope.people.push(new person("Tom", $scope.people.length + 1, 29, "Male", 8))

    $scope.addPerson = function() {
        $scope.people.push($scope.newPerson);
    }
    $scope.addMe = function() {
        $scope.me = $scope.newPerson;
    }

    $scope.findMatches = function() {
        var id = 0
        var age = 0
        var hotness = 0
        var likeness = 0
        $scope.matches = [];
        meHotness = $scope.me.hotness
        for (var i = 0; i < $scope.people.length; i++) {
            if ($scope.me.gender.toLowerCase() != $scope.people[i].gender.toLowerCase()) {
                id = $scope.people[i].id
                age = $scope.people[i].age
                hotness = $scope.people[i].hotness
                likeness = Math.abs(age - $scope.me.age) + Math.abs(hotness - $scope.me.hotness)


                $scope.matches.push(new match(id, likeness))
            }

        }
        $scope.matches.sort(function(a, b){
            return (a.likeness > b.likeness)?1:((b.likeness > a.likeness)?-1:0);
            
        })
    }


})

var person = function(name, id, age, gender, hotness) {
    this.name = name;
    this.id = id;
    this.age = age;
    this.gender = gender;
    this.hotness = hotness;
}

var match = function(id, likeness) {
    this.id = id;
    this.likeness = likeness;
}

// var sortMatch = function(x) {
//     var currentLowest = 1000;
//     var currentPerson = 0;
//     var tempArr = [];
//     for (j = 0; j < x.length; j++) {
//         for (i = 0; i < x.length; i++) {
//             if (x[i].likeness < currentLowest) {
//                 currentLowest = x[i].likeness;
//                 currentPerson = x;
//             }
//             tempArr.push(currentPerson);
//             //x.splice(indexOf(currentPerson, 1))
//         }

//         //get the likeness score
//         //store the current likeness
//         //loop through the matches again
//         for (i = 0; i < $scope.matches.length; i++)


//         //check that likeness score against the others

//         //
//     }
// }