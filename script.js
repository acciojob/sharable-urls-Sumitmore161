// your code here
document.getElementById("myForm").addEventListener("submit", function (e) {
	e.preventDefault();

	const name = document.getElementById("name").value;
	const year = document.getElementById("year").value;

	const params = new URLSearchParams(window.location.search);
	params.set("name",name);
	params.set("year",year);
	window.location.search = params.toString();
})