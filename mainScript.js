$(document).ready(function() {
            $(window).scroll(function() {

                var y = $(this).scrollTop();

                $('nav a').each(function(event) {
                    if (y >= $($(this).attr('href')).offset().top - 90) {
                        $('nav a').not(this).removeClass('current');
                        $(this).addClass('current');
                    }
                });

            });
        });


//$(document).ready(function() {
//    $(".image").hover(function(){
//  
//},
//function(){
//  
//});
//});

$(document).ready(function() {
$("#project1").hover(function(){
  $(".madeWith1").toggle();
});
});


$(document).ready(function() {
$("#project2").hover(function(){
  $(".madeWith2").fadeToggle("slow");
});
});


$(document).ready(function() {
$("#project3").hover(function(){
  $(".madeWith3").slideToggle();
});
});

 

$(document).ready(function(){
  $("#project4").click(function(){
    $(".madeWith4").animate({
      height: 'toggle'
    });
  });
});

$(document).ready(function() {
$(".hide").click(function(){
  $(".para1").hide("slow");
});
});



$(document).ready(function() {
$(".visible").click(function(){
  $(".para1").show("3000");
});
});


//FILTER GALLERY



filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}








//LIGHTBOX
 $(document).ready(function() {
            $("a[rel^='prettyPhoto']").prettyPhoto({
                slideshow: 3000,
                autoplay_slideshow: true,
                social_tools: "",
                theme: 'light_rounded',
                /* light_rounded / dark_rounded / light_square / dark_square / facebook */
            });
        });


//accordian

$(document).ready(function() {
$( function() {
    $( "#accordion" ).accordion({
        heightStyle: "content",
        collapsible: false,
        active: false
    });
  } );
});


//   HOOKUP FLeXSLIDER 

 $(document).ready(function() {
        $(window).load(function() {
            $('#carousel').flexslider({
                animation: "slide",
                controlNav: true,
                animationLoop: true,
                slideshow: true,
                itemWidth: 210,
                itemMargin: 5,
                asNavFor: '#slider',
                pausePlay: true
            });
        });
 });


//   HOOKUP FLeXSLIDER 
 $(document).ready(function() {
   $(window).load(function() {
            $('.flexslider').flexslider({
                animation: "slide",
                slideshow: true,
                slideshowSpeed: 3000
            });
            });
        });






$(document).ready(function() {
 $(window).load(function() {
            $('#carousel').flexslider({
                animation: "slide",
                controlNav: true,
                animationLoop: true,
                slideshow: true,
                itemWidth: 210,
                itemMargin: 5,
                asNavFor: '#slider',
                pausePlay: true
            });
        });
    
            masonry();
            $(window).trigger("resize");
});



// MASONRY JQUERY

function masonry(){
    var wall = new Freewall("#freeWall");

    wall.reset({
        selector: '.tiles',
        animate: true,
        cellW: 200,
        cellH: 'auto',
        onResize: function() {
            wall.fitWidth();
        }
    });

    wall.container.find('.tiles img').load(function() {
        wall.fitWidth();
    });
}

//TOP BUTTON

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});




















