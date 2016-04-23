$(document).ready(function(){

// --- LOGO ANIM ---

	var altern= false;

	$("#logo").mouseleave(function(){
		if (altern) {
			$(this).attr('class', 'tiltR');
			$(this).removeClass('tilt');
			altern= false;
			console.log(altern);
		} else {
			$(this).attr('class', 'tilt');
			$(this).removeClass('tiltR');
			altern= true;
			console.log(altern);
		}

	});    

});