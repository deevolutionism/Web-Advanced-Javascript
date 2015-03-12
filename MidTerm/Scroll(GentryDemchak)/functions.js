var sliderVal = 0;

var w = window;
console.log(w.pageYOffset);

var background;
var backgroundColor;

//http://www.javascriptkit.com/dhtmltutors/parallaxscrolling/
window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)}


 var sidebar = document.getElementById('description');

//capture image elements. Probably a more efficient way to do this... for loop + array??
 var image5 = document.getElementById('image5');
 var image4 = document.getElementById('image4');
 var image3 = document.getElementById('image3');
 var image2 = document.getElementById('image2');
 var image1 = document.getElementById('image1');
 var image = document.getElementsByClassName('image');
 console.log(image5);

 function scale() {
  var scrolltop = window.pageYOffset;
  console.log(window.pageYOffset);

  //a lot of hard coded values... hope to make this more of a system in the future.
  //Change each image's position based on scroll distance from top.
  image5.style.transform = "translateZ(" + (window.pageYOffset - 1500) + "px)";
  image4.style.transform = "translateZ(" + (window.pageYOffset - 2000) + "px)";
  image3.style.transform = "translateZ(" + (window.pageYOffset - 2500) + "px)";
  image2.style.transform = "translateZ(" + (window.pageYOffset - 3000) + "px)";
  image1.style.transform = "translateZ(" + (window.pageYOffset - 3500) + "px)";
  
  //set the initial starting position in the Z plane for each photo. About 500px between each.
  var position5 = window.pageYOffset - 1500;
  var position4 = window.pageYOffset - 2000;
  var position3 = window.pageYOffset - 2500;
  var position2 = window.pageYOffset - 3000;
  var position1 = window.pageYOffset - 3500;

  //change background color as the user "increases in depth" (scrolls)
  document.body.style.backgroundColor = "rgb(" + (255 - backgroundColor) + "," + (255 - backgroundColor) + "," + (255 - backgroundColor) + ")";
  
  //change the opacity of the image after a certain threshold in order to reveal the next image in sequence.
  if (position5 > 0 && position5 < 100) {
    image5.style.opacity = .5;
    } else if (position5 > 100){
      image5.style.opacity = 0;
    } else {
      image5.style.opacity = 1;
    }

  if (position4 > 0 && position4 < 100) {
    image4.style.opacity = .5;
    } else if (position4 > 100){
      image4.style.opacity = 0;
    } else {
      image4.style.opacity = 1;
    }

  if (position3 > 0 && position3 < 100) {
    image3.style.opacity = .5;
    } else if (position3 > 100){
      image3.style.opacity = 0;
    } else {
      image3.style.opacity = 1;
    }

  if (position2 > 0 && position2 < 100) {
    image2.style.opacity = .5;
    } else if (position2 > 100){
      image2.style.opacity = 0;
    } else {
      image2.style.opacity = 1;
    }

  if (position1 > 0 && position1 < 100) {
    image1.style.opacity = .5;
    } else if (position1 > 100){
      image1.style.opacity = 0;
    } else {
      image1.style.opacity = 1;
    }

  //start screen looks similar to a file cabinet - provides overview look
  if (window.pageYOffset == 0) {
    image5.style.transform = "translateY(400px) translateZ(-1500px)";
    image4.style.transform = "translateY(200px) translateZ(-2000px)";
    image3.style.transform = "translateY(0px) translateZ(-2500px)";
    image2.style.transform = "translateY(-200px) translateZ(-3000px)";
    image1.style.transform = "translateY(-400px) translateZ(-3500px)";
    image5.style.opacity = .8;
    image4.style.opacity = .8;
    image3.style.opacity = .8;
    image2.style.opacity = .8;
    image1.style.opacity = .8;
    sidebar.innerHTML = "<h3>Gentry Demchak</h3><p>Design and Technology</p><p>Contact: deevolutionism@gmail.com</P><a href=https://twitter.com/?lang=en><p><img src=images/twitter.png</p></a>";
  } 


  //
  if (position5 > -500 && position5 < 0){
    sidebar.innerHTML = "<h3>Sven Head</h3><h5>2015</h5><p>An effort to increase recycling on D12. We scanned, 3D printed, and animated Sven's head. We also recorded 15 quotes. He would react whenever someone deposited trash. Made in partnership with Shubhank Sahey, Yumeng Wang, and Yi Tang.</p>";
  } else if (position4 > -500 && position4 < 0) {
    sidebar.innerHTML = "<h3>Game Station</h3><h5>2014</h5><p>An interactive peppers ghost game table. It can support up to 4 players and can swap between 4 different modes. Pong, a drawing program, 3D shape, and 3D model.</p>";
  } else if (position3 > -500 && position3 < 0) {
    sidebar.innerHTML = "<h3>NeonCha</h3><h5>2014</h5><p>Tasked to create a game with a group, we decided to make our own skin of frogger: StarWars style! Made in partnership with Shubhank Sahey, Yumeng Wang, and Yi Tang.</p>";
  } else if (position2 > -500 && position2 < 0) {
    sidebar.innerHTML = "<h3>Organ Backpack</h3><h5>2014</h5><p>The Organ Backpack is a playful exploration into arduino and sound. The object augments human emotion by expressing it through 3 obnoxiously loud organ pipes, each powered by their own 12V squirrel fan.</p>";
  } else if (position1 > -500 && position1 < 0) {
    sidebar.innerHTML = "<h3>ModPak</h3><h5>2014</h5><p>Modular Disaster Relief back concept. Every disaster zone is different, thus emergency kits should reflect the unique safety requirements of each area. A modular, ready-to-go backpack could replace the general kits for a more useful alternative.</p>";
  }

  // if (window.pageYOffset == 0) {
  //   sidebar.innerHTML = "<h3>Gentry Demchak</h3><p>This is an experimental
  //   portfolio website created by Gentry Demchak in 2015 for Owen Herterich's Javascript class<p>";
  // }



 };

 //http://stackoverflow.com/questions/5649803/remap-or-map-function-in-javascript
 //similar to processing's map function.
 function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);

}

 // window.addEventListener('scroll', function(){
 //  scale;
 // })

  //call the scroll function whenever the page is scrolled
 window.addEventListener('scroll', function(){
   // requestAnimationFrame(scale)

   //store map_range function as a variable
   background = map_range(window.pageYOffset,0,6384,0,255);
   //convert to int because color will not accept floats
   backgroundColor = background | 0; //convert float to int so color can be changed


   scale();
 }, false);





