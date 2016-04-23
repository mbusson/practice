$(document).ready(function(){
    
var $carrousel = $('#carrousel'),
    $img = $('#carrousel .imgCar'),
    totalImages = $img.length - 1,
    i = 0,
    $currentOne = $img.eq(i);

// initialized var, now hiding all images but the current one

    $img.css('display', 'none');
	$currentOne.fadeIn("slow");

// listening to click on controls and in/decrementing index accordingly, then refreshing current image

$('#nextCar').click(function(){ 
	i++;
    if( i <= totalImages ){
        $currentOne.fadeOut("slow", function(){
            $currentOne = $img.eq(i);
            $currentOne.fadeIn("slow");
        });
    }
    else{
        i = totalImages;
    }
});


$('#prevCar').click(function(){
    i--;
    if( i >= 0 ){
        $currentOne.fadeOut("slow", function(){
            $currentOne = $img.eq(i);
            $currentOne.fadeIn("slow");
        });
    }
    else{
        i = 0;
    }
});
    
// creating timed slider

function sliderCarrousel(){
    setTimeout(function(){
        if(i < totalImages){
	    i++;
	}
	else{
	    i = 0;
	}

    $currentOne.fadeOut("slow", function(){
        $currentOne = $img.eq(i);
        $currentOne.fadeIn("slow");
    });

	sliderCarrousel();
    }, 5000);
}

sliderCarrousel();

});
