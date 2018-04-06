var imageTrackerCpp = 1;
var imageTrackerJava = 1;
var imageTrackerWeb = 1;


function changeCpp() {
	if (imageTrackerCpp === 1) {
		document.getElementById("CppChange").src = "cpp2.png";
		imageTrackerCpp = 2;
	} else if (imageTrackerCpp === 2) {
		document.getElementById("CppChange").src = "cpp3.png";
		imageTrackerCpp = 3;
	} else if (imageTrackerCpp === 3) {
		document.getElementById("CppChange").src = "cpp1.png";
		imageTrackerCpp = 1;
	}
}

function changeJava() {
	if (imageTrackerJava === 1) {
		document.getElementById("JavaChange").src = "java2.gif";
		imageTrackerJava = 2;
	} else if (imageTrackerJava === 2) {
		document.getElementById("JavaChange").src = "java3.gif";
		imageTrackerJava = 3;
	} else if (imageTrackerJava === 3) {
		document.getElementById("JavaChange").src = "java1.gif";
		imageTrackerJava = 1;
	}
}

function changeWeb() {
	if (imageTrackerWeb === 1) {
		document.getElementById("WebChange").src = "web2.gif";
		imageTrackerWeb = 2;
	} else if (imageTrackerWeb === 2) {
		document.getElementById("WebChange").src = "web3.gif";
		imageTrackerWeb = 3;
	} else if (imageTrackerWeb === 3) {
		document.getElementById("WebChange").src = "web1.gif";
		imageTrackerWeb = 1;
	}
}

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});