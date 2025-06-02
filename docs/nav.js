function openNav() {
	document.getElementById("nav").style.width = "75%";
	document.getElementById("nav").style.boxShadow = "8px 0 10px 5px black";
	document.getElementById("nav-ul").style.opacity = "100%";
	document.getElementById("hamburger-close").style.display = "initial";
	document.getElementById("hamburger").style.display = "none";

}
function closeNav() {
	document.getElementById("nav").style.width = "0%";
	document.getElementById("nav").style.boxShadow = "none";
	document.getElementById("nav-ul").style.opacity = "0%";
	document.getElementById("hamburger-close").style.display = "none";
	document.getElementById("hamburger").style.display = "initial";
}