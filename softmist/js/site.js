



$(document).ready(function(){
	
	$(".abt-img").mouseenter(function(){
		$(this).fadeTo('fast', 0.7)
	});
	$(".abt-img").mouseleave(function(){
		$(this).fadeTo('fast', 1.0)
	});	
});

$(document).ready(function(){
	
	$(".cont").mouseenter(function(){
		$(this).fadeTo('fast', 0.7)
	});
	$(".cont").mouseleave(function(){
		$(this).fadeTo('fast', 1.0)
	});	
});

// Year Get Function
function YearGet() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("Year").innerHTML = n;
}
YearGet();

// function postForm(){
	// $(".contact-form").slideToggle(1000)
	// $("#thanks").slideToggle(1000)
// };

function slideHide(){
	
	$(".contact-form").slideToggle(1000)
	$("#thanks").slideToggle(1000)
	var name = $("#name").val();
	
	$("#namer").html(name)
}

function postForm(obj,event) {

 event.preventDefault();
$.post("http://api.tackter.io/api/UserForms", $(obj).serialize(),slideHide);




}

function homeClick(){
	
	$("#HOME").addClass("active")
	$("#ABOUT").removeClass("active")
	$("#CONTRIB").removeClass("active")
	$("#CONTACT").removeClass("active")
	
	
}


function textAnimate() {

    var lineOne = $("#line1");
    var lineTwo = $("#line2");
    var lineThree = $("#line3");
	var lineFour = $("#line4");


    var lines = [lineOne, lineTwo, lineThree, lineFour]

    var cnt = 1;
    lines[0].show();
    setInterval(function () {
    
        $(".lines").hide();
        lines[cnt].fadeIn(500);


        if (cnt == 3) {
            cnt = 0;
        } else {
            cnt++
        }
      
    }, 8000)
}
textAnimate();

function siren(){

	alert("Hello")

}


// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption1");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// Get the modal
var modal = document.getElementById('myModal2');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg2');
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption2");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// Get the modal
var modal = document.getElementById('myModal3');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg3');
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("caption3");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[2];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}