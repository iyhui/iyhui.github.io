var modal = document.getElementById("myModal");

// Get the button that opens the modal
var aardvark = document.getElementById("btn1");
var pngy = document.getElementById("btn2");
var hello_flash = document.getElementById("btn3");

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks the button, open the modal 
let openModal = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal

let closeModal = function(){
    modal.style.display = "none";
    document.querySelector(".modal-content1").style.display = "none";
    document.querySelector(".modal-content2").style.display = "none";
    document.querySelector(".modal-content3").style.display = "none";
}

span.onclick= function() {
    closeModal()
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal()
  }
}

aardvark.onclick = _ => {
    openModal()
    document.querySelector(".modal-content1").style.display = "block"
    
}

pngy.onclick = _ => {
    openModal()
    document.querySelector(".modal-content2").style.display = "block"
}

hello_flash.onclick = _ => {
    openModal()
    document.querySelector(".modal-content3").style.display = "block"
}