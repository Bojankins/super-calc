(function(){
	'use strict';

	$(document).ready(initialize);

	function initialize () {
		$('.number').click(display);
		$('#clear-display').click(clear);
		$('.decimal').click(dec);
		$('.sign').click(sign)
		$('#title').click(title)
	}

	function title(){
		var display = $('#calculator').css('display');

		if(display === 'none'){
			$('#calculator').fadeIn();}
		else{	
			$('#calculator').fadeOut();}
}


	function display (){
		var num = this.textContent * 1;
		var output = $('#display').text();
		
		output += num;

		$('#display').text(output * 1);
	}

	function clear (){
		var type = this.textContent

		if(type === 'C')
			$('#display').text(0);
	}

	function sign (){
		var display = $('#display').text();
		$('display').text(display * -1)
	}




 // 	function number() {
 // 		var num = this.textContent;
 // 		var output = $('#display').text();

 // 		if(output === '0') {
 // 			output = num;
 // 		}else{
 // 			output == num;
 // 		}

 // 	}


	// function dec (){
	// 	var display = $('#display')text();
	// 	var noDecimal = display.indexOf('.') === -1;

	// 	if(noDecimal) 
	// 		$('#display').text(display + ('.');
		
	// 	}


	




})();