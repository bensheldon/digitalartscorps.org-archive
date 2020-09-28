$(document).ready(function(){
  var currentPosition = 0;
  var slideWidth = 340;
  var slides = $('.slide');
  var numberOfSlides = slides.length;

  // Remove scrollbar in JS
  $('#slidesContainer').css('overflow', 'hidden');

  // Wrap all .slides with #slideInner div
  slides
    .wrapAll('<div id="slideInner"></div>')
    // Float left to display horizontally, readjust .slides width
	.css({
      'float' : 'left',
      'width' : slideWidth
    });

  // Set #slideInner width equal to total width of all slides
  $('#slideInner').css('width', slideWidth * numberOfSlides);

  // Create event listeners for .controls clicks
  $('.control')
    .bind('click', function(){
    // Determine new position
	currentPosition = ($(this).attr('id')=='rightControl') ? currentPosition+1 : currentPosition-1;
    
    // Move slideInner using margin-left
    $('#slideInner').animate({
      'marginLeft' : slideWidth*(-currentPosition)
    });
  });

  function manageControls(position){}	
  
  	setInterval(function() {
		if(currentPosition==numberOfSlides-1){ currentPosition = 0 } else{ currentPosition = currentPosition+1 }
			// Hide / show controls
			manageControls(currentPosition);
			// Move slideInner using margin-left
			$('#slideInner').animate({
				'marginLeft' : slideWidth*(-currentPosition)
			});
		}, 5000);
});