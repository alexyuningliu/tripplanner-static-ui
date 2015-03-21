$( "button.add-hotels" ).on( "click", function() {
  console.log($( "#selector-hotels option:selected" ).text());
});

$( "button.add-restaurants" ).on( "click", function() {
  console.log($( "#selector-restaurants option:selected" ).text());
});

$( "button.add-things_to_do" ).on( "click", function() {
  console.log($( "#selector-things_to_do option:selected" ).text());
});