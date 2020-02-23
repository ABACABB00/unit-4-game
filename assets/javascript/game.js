// dom ready
window.onload = function() {
    // crystal images in array
	var crystals = ['assets/images/amethystcrystal.png', 'assets/images/aquamarinecrystal.png', 'assets/images/citrinecrystal.png', 'assets/images/emeraldcrystal.png', 'assets/images/rubycrystal.png'];
	// 
	var wins = 0;
	var lose = 0;
	var userscore = 0;
	
	var matchingscore = Math.floor((Math.random() * 100) + 20);

	$('.gameinfo').hide();
	$('#btn1').on('click', function(){
		$('.gameinfo').toggle();		
	});
	

	$("#matchingscores").text(matchingscore);

	function restart() {
		matchingscore = Math.floor((Math.random() * 100) + 20);
		console.log(matchingscore);
		$("#matchingscores").text(matchingscore);
    // here you make a new colorcounts value but never put it anywhere
		colorcounts = (Math.floor(Math.random() * 10) + 2);
		userscore = 0;
    $("#scores").text(userscore);
	}

    for (var i = 0; i < crystals.length; i++) {
    	var colorcounts = Math.floor(Math.random() * 10) + 2;
      	var imagecrystal = $("<img>");
      	imagecrystal.attr("src", crystals[i]);
      	imagecrystal.addClass("crystal-image");
        // need to update this one each element
      	imagecrystal.attr("data-crystalvalue", colorcounts);
      	$("#colorcrystal").append(imagecrystal);
    }

    $(".crystal-image").on("click", function() {
		var crystalValue = ($(this).attr("data-crystalvalue"));
      	crystalValue = parseInt(crystalValue);
		    console.log(matchingscore);
      	userscore += crystalValue;
      	console.log(userscore);
      	$("#scores").text(userscore);

		if (userscore === matchingscore) {
      		wins++;
        	$("#wins").text(wins);
        	restart();
      	}
      	else if (userscore >= matchingscore) {
      		lose++;
        	$("#lose").text(lose);
        	restart();
      	}
    });
};
