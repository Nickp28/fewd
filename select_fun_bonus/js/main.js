// 1.	Slide the header element up when it is clicked on.
$('header').on('click', function(){
  $('header').slideUp();

});
// 2.	Remove the purplebox class from everything.
$('.purplebox').removeClass();
// 3.	Hide all of the divs in #row4 (hint: your selector could be $('#row4 div') )
$('#row4 div').hide();
// 4.	Add a paragraph that says "I have been added" to all boxes with class "add-para" (Hint: you'll need to look up the append() method)
$(".add-para").click(function(){
    $("p").append("I have been added");
});
// 5.	Add a class in your css and add it to all items with the class .box
//check
// 6.	Show the footer when the anchor in #box2 is clicked (hint: your selector could be $('#box2 a') )
$('#box2 a').on('click', function(){
  $('footer').show();
});
// 7.	Change the styling of the span inside of #box3 by adding a class (and style that class in CSS)
//check
// 8.	Add a unique class to your CSS and add it to the articles in #row1
//check
// 9.	Change the background color of all the articles
//check
// 10.	Change the font color of all the articles in row 2
//check
// 11.	Select any spans that are siblings of an h4 (using the .siblings() method) and hide them.
$('span').ready(function(){
    $("h4").siblings().css({"color": "red", "border": "2px solid red"});
});
// 12.	Clicking on #box7 should hide the span within the h2
$('#box7').on('click', function(){
  $('h2 span').hide();
});
// 13.	Add an h3 that says "Hello there!" to the beginning of #box12 (Hint: you'll need to look up the prepend() method)
$("#box12").on('click', function(){
    $('h3').prepend("hello there!");
});
// 14.	SlideUp all the h1s on the page
$('h1').on('click', function(){
  $('h1').SlideUp();
});
// 15. Add the selected class [already in the CSS] to the divs in #row4
//$('.selected').addClass('row4');
// 16.	Clicking reset should remove the selected class from everything and fade in the header element, the footer, and all elements with the class .box
$('#reset').on('click', function(){
  $('.selected')
});
