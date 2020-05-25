/* 1. Grab the input value */
//Grab bottom

document.querySelector(".js-go").addEventListener("click", function(){

	//alert("test");

	var input = document.querySelector("input").value;

	console.log(input);

	pushToDOM(input);



});





/* 2. do the data stuff with the API */









/* 3. Show me the GIFs */

function pushToDOM (input) {

	alert("Esta Pasando?");

	var container = document.querySelector(".js-container");
	container.innerHTML = input;




}









