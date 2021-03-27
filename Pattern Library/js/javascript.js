'use strict';
var sidenav = document.getElementsByClassName("sideNavi")[0];
console.log('Hello World');
function openNav(){
	.style.display = "block";
	document.getElementsByClassName("sideNavi")[0].fadeIn(1000);
}

function closeNav(){
	document.getElementsByClassName("sideNavi")[0].style.display = "none";
}
