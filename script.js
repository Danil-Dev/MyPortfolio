var menu = document.getElementById('menu');
menu.onclick = function myFunction(){
	var x = document.getElementById('mytopnav');
	var y = document.getElementById('background');

	if (x.className === "topnav") {
		x.className += " responsive";
		y.className += " background"
	} else{
		x.className = "topnav";
		y.className = "mynav"
		
	}
}

var modal = Array();
modal[0] = document.getElementById('myModal');
modal[1] = document.getElementById('myModal-1');
modal[2] = document.getElementById('myModal-2');
modal[3] = document.getElementById('myModal-3');
modal[4] = document.getElementById('myModal-4');
modal[5] = document.getElementById('myModal-5');
modal[6] = document.getElementById('myModal-6');
modal[7] = document.getElementById('myModal-7');
modal[8] = document.getElementById('myModal-8');

var btn = Array();
btn[0] = document.getElementById('myBtn');
btn[1] = document.getElementById('myBtn-1');
btn[2] = document.getElementById('myBtn-2');
btn[3] = document.getElementById('myBtn-3');
btn[4] = document.getElementById('myBtn-4');
btn[5] = document.getElementById('myBtn-5');
btn[6] = document.getElementById('myBtn-6');
btn[7] = document.getElementById('myBtn-7');
btn[8] = document.getElementById('myBtn-8');

var span =  document.getElementsByClassName("close");

window.onclick = function  (event) {
	if (event.target == modal[0] || event.target == modal[1] || event.target == modal[2]|| event.target == modal[3] || event.target == modal[4] || event.target == modal[5] || event.target == modal[6] || event.target == modal[7] || event.target == modal[8] ){
		modal[0].style.display = "none";
		modal[1].style.display = "none";
		modal[2].style.display = "none";
		modal[3].style.display = "none";
		modal[4].style.display = "none";
		modal[5].style.display = "none";
		modal[6].style.display = "none";
		modal[7].style.display = "none";
		modal[8].style.display = "none";
	}

}
function Myfun (n){
		btn[n].onclick = function (){
		modal[n].style.display = "block";
	}

	span[n].onclick = function(){
		modal[n].style.display = "none";
	}
}







$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Cпасибо, мы свяжемся с вами!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
