window.onload = function() {

var bluecrystal = 0;
var purplecrystal = 0;
var whitecrystal = 0;
var rainbowcrystal = 0;
var randomnumber = 0;

bluecrystal = "#blue";
purplecrystal = "#purple";
whitecrystal = "#white";
rainbowcrystal = "#rainbow";
randomnumber = "#randomnumber";

  function crystal(result) {

  	var bluecrystal = Math.floor(Math.random() * 12) + 1;
  	var purplecrystal = Math.floor(Math.random( * 12) + 1);
  	var whitecrystal = Math.floor(Math.random( * 12) + 1);
  	var rainbowcrystal = Math.floor(Math.random( * 12) + 1);
	var randomnumber = Math.floor(Math.random() * 120) + 19;

}

  $("#blue").on("click", function() {
  		$("#score").bluecrystal();
  			.innerhtml(result);
  });

  $("#purple").on("click", function() {
  		$("#score").purplecrystal();
  			.innerhtml(result);
  });

  $("#white").on("click", function() {
  		$("#score").whitecrystal();
  			.innerhtml(result);
  });

  $("#rainbow").on("click", function() {
  		$("#score").rainbowcrystal();
  			.innerhtml(result);
  });

  if (randomnumber === 1) {
 	$("#blue").result();
 }

if (randomnumber === 1) {
 	$("#purple").result();
 }

 if (randomnumber === 1) {
 	$("#white").result();
 }

 if (randomnumber === 1) {
 	$("#rainbow").result();
 }

};

