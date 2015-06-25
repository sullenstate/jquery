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

$(document).ready(function(){
	$('p').hover(function(){
		$(this).css('color', 'red');
	} , function(){
		$(this).css('color', 'black');
	});
	$(':header').mouseover(function(){
		if ($(this).text().substr(- 1) !== '!') {
			$(this).append('!');
		} 
	});
});