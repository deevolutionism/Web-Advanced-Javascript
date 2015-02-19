
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