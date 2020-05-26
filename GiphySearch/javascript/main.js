/* 1. Grab the input value */


document.querySelector(".js-go").addEventListener("click", function(e){

	var input = document.querySelector("input").value;

});

//keyup to make it work with enter key

document.querySelector(".js-userinput").addEventListener("keyup", function(e){

	var input = document.querySelector("input").value;

	//If enter key is press then execute
	if(e.which === 13) {

		pushToDOM(input);
	}


});


/* 2. do the data stuff with the API */


var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";

// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener("load", function(e){


	var data = e.target.response;
	console.log(data);





})




/* 3. Show me the GIFs */

function pushToDOM (input) {

	//alert("Esta Pasando?");

	var container = document.querySelector(".js-container");
	container.innerHTML = input;

}









