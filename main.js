// >>>>>>>> Part 1 <<<<<<<<
// $(document).ready(function(){
// 	$('.howdy').click(function(){
// 		$(".pageContainer").append("<p>Howdy, howdy, howdy!</p>");
// 	});
// 	$('.header').click(function(){
// 		$('h1').append('I Be the Header ');
// 	});
// 	$(':button').click(function(){
// 		var myList = $('<ul>');
// 		for (i=1; i<=3; i++) {
// 			myList.append('<li>List item ' + i + '</li>');
// 		}
// 		$('.pageContainer').append(myList);
// 	});
// });
// >>>>>>>> End Part 1 <<<<<<<<

// >>>>>>>> Part 2 <<<<<<<<

	// $('p').hover(function(){
	// 	$(this).css('color', 'red');
	// } , function(){
	// 	$(this).css('color', 'black');
	// });
	// $(':header').mouseover(function(){
	// 	if ($(this).text().substr(- 1) !== '!') {
	// 		$(this).append('!');
	// 	} 
	// });

	// $('a').click(function(){
	// 	if (confirm('Do you really want to visit ' + $('a').attr('href') + '?') === false) {
	// 		$('a').contents().unwrap();
	// 		return false;
	// 	} else {
	// 		return true;
	// 	}
	// });

// >>>>>>>> End Part 2 <<<<<<<<
$(document).ready(function(){
	$('.main').click( function(){
		$('.pageContainer').append("<div class='popUp'><h2>This is my popup message.</h2><div class='button second'>Make me go away!</div></div>");
	});	
	$('.pageContainer').on('click', '.popUp', function(){
		$('.popUp').remove();
	});
});
