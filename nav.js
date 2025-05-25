function openNav() {
	document.getElementById("nav").style.width = "75%";
	document.getElementById("nav-ul").style.opacity = "100%";
	document.getElementById("hamburger-close").style.opacity = "100%";
	document.getElementById("hamburger-close").style.display = "block";
	document.getElementById("hamburger").style.opacity = "0%";
	document.getElementById("hamburger").style.display = "none";

}
function closeNav() {
	document.getElementById("nav").style.width = "0%";
	document.getElementById("nav-ul").style.opacity = "0%";
	document.getElementById("hamburger-close").style.opacity = "0%";
	document.getElementById("hamburger-close").style.display = "none";
	document.getElementById("hamburger").style.opacity = "100%";
	document.getElementById("hamburger").style.display = "block";
}