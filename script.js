// your code here
	const myUrl = document.getElementById("url");
	myUrl.textContent = window.location.origin + window.location.pathname
document.getElementById("button").addEventListener("click", function (e) {
	e.preventDefault();

	const name = document.getElementById("name").value;
	const year = document.getElementById("year").value;
	const params = new URLSearchParams(window.location.search);
	if(name)
		params.set("name",name);
	if(year)
		params.set("year",year);
	const finalUrl = window.location.origin + window.location.pathname + ((name || year) ? "?": "")+ params.toString();
	myUrl.textContent = finalUrl;
	window.location.search = finalUrl;
	
})