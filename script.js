// your code here
document.getElementById("myForm").addEventListener("submit", function (e) {
	e.preventDefault();

	const name = document.getElementById("name").value;
	const year = document.getElementById("year").value;
	const myUrl = document.getElementById("myUrl");
	const params = new URLSearchParams(window.location.search);
	params.set("name",name);
	params.set("year",year);
	myUrl.textContent = params.toString();
	window.location.search = params.toString();
	
})