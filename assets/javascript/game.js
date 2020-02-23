// dom ready
window.onload = function() {
    // crystal images in array
	var crystals = ['assets/images/amethystcrystal.png', 'assets/images/aquamarinecrystal.png', 'assets/images/citrinecrystal.png', 'assets/images/emeraldcrystal.png', 'assets/images/rubycrystal.png'];
	//sets wins and losses
	var wins = 0;
	var losses = 0;
	var userscore = 0;

	// random number generator for match the number
	var matchingScore = Math.floor((Math.random() * 101) + 19);

	// button for how to play
	$('.gameinfo').hide();
	$('#btn1').on('click', function(){
		$('.gameinfo').toggle();		
	});
	
	// text for match the number
	$("#matchingscores").text(matchingScore);

	// 
	function restart() {
		 // Number should be between 19 - 120
		matchingScore = Math.floor((Math.random() * 101) + 19);
		console.log(matchingScore);
		$("#matchingscores").text(matchingScore);
		
    	// Random number has to be between 1 - 12
		crystalCount = (Math.floor(Math.random() * 11) + 1);
		userscore = 0;
    $("#scores").text(userscore);
	}
	// random generator for crystals
    for (var i = 0; i < crystals.length; i++) {
    	var crystalCount = Math.floor(Math.random() * 11) + 1;
      	var crystalImage = $("<img>");
      	crystalImage.attr("src", crystals[i]);
      	crystalImage.addClass("crystal-image");
      	crystalImage.attr("data-crystalvalue", crystalCount);
      	$("#crystals").append(crystalImage);
    }

	 //  Decaring variables for score
    $(".crystal-image").on("click", function() {
		var crystalValue = ($(this).attr("data-crystalvalue"));
      	crystalValue = parseInt(crystalValue);
		    console.log(matchingScore);
      	userscore += crystalValue;
      	console.log(userscore);
		  $("#scores").text(userscore);
		  
		// point tallies
		if (userscore === matchingScore) {
      		wins++;
			$("#wins").text(wins);
			alert("Congratulations You Won!!")
			restart();
      	}
      	else if (userscore >= matchingScore) {
      		losses++;
			$("#lose").text(losses);
			alert("Sorry You Lose, Please Try Again.")
        	restart();
      	}
    });
};
