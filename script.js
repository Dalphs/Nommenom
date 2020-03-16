var courses = ["Risotto", "Cacio é pepe", "Confit de canard", "Pizza", "Boller i Karry",
    "Spaghetti Cabonara", "Flæskesteg", "Lasagne"];
var coursePlaceHolder = document.getElementById("course-placeholder");
var dinnerButton = document.getElementById("food-button");

findDinner = () =>{
    coursePlaceHolder.innerHTML = courses[Math.floor((Math.random() * 8))];
    dinnerButton.innerHTML = "Ny ret";
}

document.onkeypress = function(e) {
    console.log(e);
    if (e.key === "Enter") {
      findDinner();
    }
};

window.onload = function () {
   var header = document.getElementById('page-header');
   var height = header.clientHeight;
   //window.scrollBy(0, (height / 2));

   $('html, body').animate({
    scrollTop: (height / 2)
 }, 4500, "easeOutQuad");
};

$(function(){
    $('#header-image').data('size','big');
});

$(window).scroll(function(){
    
    if($(document).scrollTop() > 0)
    {
        console.log("scroll");
        if($('#header-image').data('size') == 'big')
        {
            console.log("data big");
            $('#header-image').data('size','small');
            $('#header-image').stop().animate({
                'max-width':'50%'
            },2000, "easeOutQuad");
        }
    }
    else
    {
        if($('#header-image').data('size') == 'small')
        {
            console.log("data small");
            $('#header-image').data('size','big');
            $('#header-image').stop().animate({
                'max-width':'100%'
            },200);
        }  
    }
});