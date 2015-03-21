//Hotel code

$( "button.add-hotels" ).on( "click", function() {
	var hotelName = $( "#selector-hotels option:selected" ).text();
	console.log(hotelName);
	$("#itinerary-hotels").append(
		'<div class="itinerary-item" id="itinerary-hotels"><span class="title">' + hotelName + '</span><span class="remove"><button class="btn btn-danger btn-xs btn-circle pull-right">x</button></span></div>'
	);
});

//Restaurant code

$( "button.add-restaurants" ).on( "click", function() {
	var restaurantName = $( "#selector-restaurants option:selected" ).text();
	console.log(restaurantName);
	$("#itinerary-restaurants").append(
		'<div class="itinerary-item" id="itinerary-restaurants"><span class="title">' + restaurantName + '</span><span class="remove"><button class="btn btn-danger btn-xs btn-circle pull-right">x</button></span></div>'
	);
});

//Things to do code

$( "button.add-things_to_do" ).on( "click", function() {
	var thingToDoName = $( "#selector-things_to_do option:selected" ).text();
	console.log(thingToDoName);
	$("#itinerary-things_to_do").append(
		'<div class="itinerary-item" id="itinerary-things_to_do"><span class="title">' + thingToDoName + '</span><span class="remove"><button class="btn btn-danger btn-xs btn-circle pull-right">x</button></span></div>'
	);
});