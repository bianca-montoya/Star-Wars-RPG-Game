$(document).ready(function(){





function fighter(healthPower, attackPower, basePower, name) {
    this.healthPower = healthPower;
    this.attackPower = attackPower;
    this.basePower = basePower;
    this.name = name;


}


var whiteFighter = new fighter(25, 8, 8, "White Fighter");
var pinkFighter = new fighter(45, 10, 10, "Pink Fighter");
var greenFighter = new fighter(30, 5, 5, "Green Fighter");
var blueFighter = new fighter(12, 2, 2, "Blue Fighter");

$("#white-fighter").html(whiteFighter.name);
$("#white-fighter-power").append("Health Power: " + whiteFighter.healthPower + " Attack Power: " + whiteFighter.attackPower);

$("#pink-fighter").html(pinkFighter.name);
$("#pink-fighter-power").append("Health Power: " + pinkFighter.healthPower + " Attack Power: " + pinkFighter.attackPower);

$("#green-fighter").html(greenFighter.name);
$("#green-fighter-power").append("Health Power: " + greenFighter.healthPower + " Attack Power: " + greenFighter.attackPower);

$("#blue-fighter").html(blueFighter.name);
$("#blue-fighter-power").append("Health Power: " + blueFighter.healthPower + " Attack Power: " + blueFighter.attackPower);


$(".fighter").on("click", function(){
// $(this).removeClass("fighter");
// $(this).removeClass("col-md-3");
$(this).addClass("you");
$(this).clone().appendTo(".my-character");

$(this).empty();
$(".fighter").clone().appendTo(".enemy");


$(".fighter").addClass("enemy-character");

// $(".enemy-character").removeClass("fighter");
// $(".enemy-character").appendTo(".enemy");
$("#fighterow").empty();


});
$(document).on('click', '.enemy-character', function(){
	$(".enemy-character").clone().appendTo(".openent-character");
// alert("clicked");

});


// document.getElementById("demo").innerHTML =

});