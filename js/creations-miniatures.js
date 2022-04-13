$(document).ready(function(){
	$("body").append('<div id="miniature" style="display: flex; justify-content: center">'+
			'<img src="assets/creations/bonbons.png" alt="bonbons">'+
			'<img src="assets/creations/cr_poster1.png" alt="Contour Regard - Affiche 1">'+
			'<img src="assets/creations/cr_poster2.png" alt="Contour Regard - Affiche 2">'+
			'<img src="assets/creations/doremi.png" alt="Magical Doremi">'+
			'<img src="assets/creations/find_it.png" alt="UK">'+
			'<img src="assets/creations/mmi.png" alt="Proposition de logo pour la MMI">'+
			'<img src="assets/creations/portrait.jpg" alt="Portrait caché">'+
			'<img src="assets/creations/cr2.jpg" alt="DVD de mes productions">'+
			'<img src="assets/creations/s71lpc.png" alt="Logo pour un ami">'+
			'<img src="assets/creations/workstation.png" alt="Logo pour un projet">'+
		'</div>');

		$('#miniature>img:eq(0)').attr("id", "min1");
		$('#miniature>img:eq(1)').attr("id", "min2");
		$('#miniature>img:eq(2)').attr("id", "min3");
		$('#miniature>img:eq(3)').attr("id", "min4");
		$('#miniature>img:eq(4)').attr("id", "min5");
		$('#miniature>img:eq(5)').attr("id", "min6");

		var imgnb = 1;
		$('#min'+imgnb).addClass('highlight');
		var fade_ok = true;

		$("#Precedent").click(function(){
			$('#min'+imgnb).removeClass("highlight");
			imgnb--;
			if (imgnb == 0) {
				$('#miniature>img:last').addClass('highlight');
				setTimeout(function(){fade_ok = true; imgnb = 6;}, 500); 
				
			}
			else {
				$('#min'+imgnb).addClass('highlight');
				setTimeout(function(){fade_ok = true;}, 500); 
			}
		});

		$("#Suivant").click(function(){
			$('#min'+imgnb).removeClass("highlight");
			imgnb++;
			if (imgnb == 7) {
				$('#miniature>img:first').addClass('highlight');
				setTimeout(function(){fade_ok = true; imgnb = 1;}, 500);  
				
			}
			else {
				$('#min'+imgnb).addClass('highlight');
				setTimeout(function(){fade_ok = true;}, 500); 
			}
		});

});