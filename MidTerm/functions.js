var sliderVal = 0;

//jQuery UI vertical slider
 $(function() {
    $( "#slider-vertical" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 100,
      value: 60,
      slide: function( event, ui ) {
        var image = document.getElementById('image1');
        $( "#amount" ).val( ui.value );

        sliderVal = ui.value;
        image.style.transform = "translateZ(" + (sliderVal * 5) + "px)";

        //$( ".container img" ).css("transform","scale(ui.value,ui.value)");
        // imageSize.css(" transform "," scale "," sliderValue , sliderValue " );
      }
    });
    $( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );
  });


var w = window;
console.log(w.pageYOffset);




$( document ).ready(function() {
 
    // $( "a" ).click(function( event ) {
    //     $( "a" ).addClass( "test" );
    //     $( "img" ).css("transform", "scale("+=1")");
    // });
 
});

//attempt 1
// //http://www.dyn-web.com/javascript/scroll-distance/
// function dw_getScrollOffsets() {
//     var doc = document, w = window;
//     var x, y, docEl;
    
//     if ( typeof w.pageYOffset === 'number' ) {
//         x = w.pageXOffset;
//         y = w.pageYOffset;
//     } else {
//         docEl = (doc.compatMode && doc.compatMode === 'CSS1Compat')?
//                 doc.documentElement: doc.body;
//         x = docEl.scrollLeft;
//         y = docEl.scrollTop;
//     }


//     var imageSize = document.querySelector("img");
//     imageSize.style.transform = "scale(" + x + ")";
//     // document.getElementsByTagName('h3').innerHTML = x;
//     console.log(w.pageXOffset);
//     return {x:x, y:y};
// };

// dw_getScrollOffsets;


//attempt 2
//http://www.javascriptkit.com/dhtmltutors/parallaxscrolling/
window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)}

 var image = document.getElementById('image1');
 console.log(image);

 function scale() {
  var scrolltop = window.pageYOffset;
  console.log(window.pageYOffset);
  image.style.transform = "translateZ(" + (window.pageYOffset - 1500) + "px)";

 };

 // window.addEventListener('scroll', function(){
 //  scale;
 // })

 window.addEventListener('scroll', function(){
   // requestAnimationFrame(scale)
   scale();
 }, false);





