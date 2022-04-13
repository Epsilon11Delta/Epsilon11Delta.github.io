$(document).ready(function(){
	$('img').css('position', 'absolute');
	 $("#wrap").css({'position':'relative',
                     'height':'300px',});
	$("#wrap").after('<div id="boutons"></div>')
	$("#boutons").append("<a id='Precedent' style='margin-right: 50px;'>Précédent</a>");
	$("#boutons").append("<a id='Suivant'>Suivant</a>");
	$('#slideshow, #boutons').css({'display':'flex','justify-content':'center'});

	$('#slideshow>img:eq(0)'+'#miniatures>img:eq(0)').attr("id", "photo1");
	$('#slideshow>img:eq(1)'+'#miniatures>img:eq(1)').attr("id", "photo2");
	$('#slideshow>img:eq(2)'+'#miniatures>img:eq(2)').attr("id", "photo3");
	$('#slideshow>img:eq(3)'+'#miniatures>img:eq(3)').attr("id", "photo4");
	$('#slideshow>img:eq(4)'+'#miniatures>img:eq(4)').attr("id", "photo5");
	$('#slideshow>img:eq(5)'+'#miniatures>img:eq(5)').attr("id", "photo6");

	var imgnb = 1;
	var fade_ok = true;
	$("img:not(#photo"+imgnb+")").hide();

	$("#Precedent").click(function(){
		if (fade_ok) {
			fade_ok=false;
			$('#slideshow>img:visible').fadeOut(500, function(){
				fade_ok = true;
			});
			imgnb--;
			if (imgnb == 0) {
				$('#slideshow>img:last').fadeIn(500, function(){
					fade_ok = true;
					imgnb = 6;
				}); 				
			}
			else {
				$('#photo'+imgnb).fadeIn(500, function(){
					fade_ok = true;
				}); 
				
			}
		}
	});

	$("#Suivant").click(function(){
		if (fade_ok) {
			fade_ok=false;
			$('#slideshow>img:visible').fadeOut(500, function(){
				fade_ok = true;
			});
			imgnb++;
			if (imgnb == 7) {
				$('#slideshow>img:first').fadeIn(500, function(){
					fade_ok = true;
					imgnb = 1;
				}); 	
				
			}
			else {
				$('#photo'+imgnb).fadeIn(500, function(){
					fade_ok = true;
				});
			}
		}

	});
})