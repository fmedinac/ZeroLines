function random(array) {
	return array[Math.floor(Math.random() * array.length)];
}

var xmlhttp = new XMLHttpRequest();
var url = "quotes.json";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        jsonLoaded(myArr);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function jsonLoaded(arr) {

	document.getElementById('line').innerHTML = '"' + random(arr.lines) + '"';
	document.body.style.backgroundColor = random(arr.colors);

}
