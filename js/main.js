$(document).ready(function(){
//alert("Hey I am connected");
//the function after the click event is called an anonymous function. NO NAME	
	$('#add').on("click", function(){
		var song = $("#song").val();
		//var song is building a string that will become html
//.val is getting input from the user field
//the li string will print the results in an unordered list below with concatenation

		var insertedSongName = "<li>" + song + "</li>"
		//take our instertedSongName string and append it to the DOM
		//finds id of song list and inserts "song" html
		$("#song-list").append(insertedSongName);
		$("#song").val("");
//.val("") is a way to clear the field. better UI that way
//sets it to an empty string



	});
	//this creates a jquery object
	//this has properties and methods
	//create a variable to hold information
	//.val is a getter and a setter. you can get the value of the input field AND you can set the value as well

});