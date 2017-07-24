console.log( "main.js" );

let startTime = Date.now();

// console.log( "startTime", startTime );

// for (var i = 0; i < 2000000; i++) {
// 	var x = i + 1/1 * 6 - 4;
// };
 
// console.log( "I lust looped: ", i, "times");
// console.log( "loop time", Date.now() - startTime);
let bigDataRequest = new XMLHttpRequest();

bigDataRequest.addEventListener("load", bigDataComplete);
bigDataRequest.addEventListener("error", bigDataFailed);

function bigDataComplete(event){
	console.log( "The BIG DATA has loaded");
	
	if (event.target.status === 200) {
		let bigData = JSON.parse(event.target.responseText);
		console.log( "Time of BIG DATA", Date.now() - startTime );
		console.log( "bigData", bigData );
	} else {
		console.log( "FAILURE" );
	}

}

function bigDataFailed(event) {
	console.log( "the data failed" );
}

bigDataRequest.open("GET", "JEOPARDY_QUESTIONS1.json");
bigDataRequest.send();


let dataRequest = new XMLHttpRequest();

dataRequest.addEventListener("load", dataRequestComplete);
dataRequest.addEventListener("error", dataRequestFailed);

function dataRequestComplete(event){
	console.log( "colors have loaded");
	let colorData = JSON.parse(event.target.responseText)
	console.log( "colorData", colorData );
	showData(colorData);
}

function showData(colors) {
	let colorDiv = document.getElementById("all-my-colors");
	let colorData = ""

	for(item in colors){
		let colorItem = colors[item];
		colorData += "<div>";
		colorData += "<h2>" + colorItem.color + ":" + colorItem.value + "</h2>";
		colorData += "</div>";

	}

	colorDiv.innerHTML += colorData;
	console.log( "colors are done", Date.now() - startTime);
}

function dataRequestFailed(event){
	console.log( "data failed", event );
}

dataRequest.open("GET", "color.json");
dataRequest.send();