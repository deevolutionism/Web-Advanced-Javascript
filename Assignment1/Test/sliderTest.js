
var buttonOneStatus = false;
var buttonTwoStatus = false;
var buttonThreeStatus = false;


window.onload = function () {
var buttonOneClick = document.getElementById('button-1'); 
    buttonOneClick.addEventListener('click', buttonOneClicked);
var buttonTwoClick = document.getElementById('button-2'); 
    buttonTwoClick.addEventListener('click', buttonTwoClicked);
var buttonThreeClick = document.getElementById('button-3'); 
    buttonThreeClick.addEventListener('click', buttonThreeClicked);

}

function buttonOneClicked() {
  

if (buttonOneStatus == false) {
        document.getElementById('button-1').setAttribute('id', 'buttonOneActive');
        
        if (buttonTwoStatus == true) {
            document.getElementById('buttonTwoActive').setAttribute('id', 'button-2');
        }
        if (buttonThreeStatus == true) {
            document.getElementById('buttonThreeActive').setAttribute('id', 'button-3');
        }
        
        buttonOneStatus = true;
        buttonTwoStatus = false;
        buttonThreeStatus = false;
    }
    
    changePicture()
}
function buttonTwoClicked() {

if (buttonTwoStatus == false) {
        document.getElementById('button-2').setAttribute('id', 'buttonTwoActive');
        
        if (buttonOneStatus == true) {
            document.getElementById('buttonOneActive').setAttribute('id', 'button-1');
        }
        if (buttonThreeStatus == true) {
            document.getElementById('buttonThreeActive').setAttribute('id', 'button-3');
        }
        
        buttonOneStatus = false;
        buttonTwoStatus = true;
        buttonThreeStatus = false;
    }
    changePicture()
}

function buttonThreeClicked() {

if (buttonThreeStatus == false) {
        document.getElementById('button-3').setAttribute('id', 'buttonThreeActive');
        
        if (buttonOneStatus == true) {
            document.getElementById('buttonOneActive').setAttribute('id', 'button-1');
        }
        if (buttonTwoStatus == true) {
            document.getElementById('buttonTwoActive').setAttribute('id', 'button-2');
        }
        
        buttonOneStatus = false;
        buttonTwoStatus = false;
        buttonThreeStatus = true;
    }
    changePicture()
    
}

function changePicture() {

    if(buttonOneStatus) {
        document.getElementById("image-1").style.zIndex = "2";
        document.getElementById("image-2").style.zIndex = "1";
        document.getElementById("image-3").style.zIndex = "1";
    } else if (buttonTwoStatus) {
        document.getElementById("image-1").style.zIndex = "1";
        document.getElementById("image-2").style.zIndex = "2";
        document.getElementById("image-3").style.zIndex = "1";
    } else if (buttonThreeStatus) {
        document.getElementById("image-1").style.zIndex = "1";
        document.getElementById("image-2").style.zIndex = "1";
        document.getElementById("image-3").style.zIndex = "2";
    } 
}





//Based on a coderwall tutorial found here: https://coderwall.com/p/vsdrug/how-to-create-an-image-slider-with-javascript
/*
var ul;
var liItems; 
var imageWidth;
var imageNumber;

function init(){

    ul = document.getElementById(image-slider);
    liItems = ul.children;
    imageNumber = liItems.length;
    imageWidth = liItems[0].children[0].offsetWidth;
    // set ul’s width as the total width of all images in image slider.
    ul.style.width = parseInt(imageWidth * imageNumber) + 'px';
    slider(ul);
}

var computedStyle = document.defaultView.getComputedStyle(liItems[i].childNodes[0], null);
imageWidth = computedStyle.width;
/**delta function is to set how the image slide—keep still for a while and move to next picture.
*step function will be called many times until clearInterval() been called
* currentImage * imageWidth is the currentImage position of ul
* delta start from 0 to 1, delta * imageWidth is the pixels that changes
**/
/*
 function slider(ul){ 
    animate({
        delay:17,
        duration: 3000,
        delta:function(p){return Math.max(0, -1 + 2 * p)},
        step:function(delta){
            ul.style.left = '-' + parseInt(currentImage * imageWidth + delta * imageWidth) + 'px';
    },
        callback:function(){
            currentImage++;
        // if it doesn’t slied to the last image, keep sliding
            if(currentImage < imageNumber-1){
                slider(ul);
        }
       // if current image it’s the last one, it slides back to the first one
            else{
                var leftPosition = (imageNumber - 1) * imageWidth;
               // after 2 seconds, call the goBack function to slide to the first image 
                setTimeout(function(){goBack(leftPosition)},2000); 
                setTimeout(function(){slider(ul)}, 4000);
            }
        }
    });
}
function goBack(leftPosition){
    currentImage = 0; 
    var id = setInterval(function(){
        if(leftPosition >= 0){
            ul.style.left = '-' + parseInt(leftPosition) + 'px';
            leftPosition -= imageWidth / 10;
        }
        else{
            clearInterval(id);
        } 
    }, 17);
}

//generic animate function
function animate(opts){
    var start = new Date;
    var id = setInterval(function(){
        var timePassed = new Date - start;
        var progress = timePassed / opts.duration
        if(progress > 1){
            progress = 1;
        }
        var delta = opts.delta(progress);
        opts.step(delta);
        if (progress == 1){
            clearInterval(id);
           opts.callback();
         }
    }, opts.dalay || 17);
}
window.onload = init;
**/