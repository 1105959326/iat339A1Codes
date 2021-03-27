'use strict';
var sidenav = document.getElementsByClassName("sideNavi")[0];
var btn = document.getElementsByClassName("opennavi")[0];
btn.addEventListener('click', 
	function(){
	if(sidenav.classList.contains('hide')){
		console.log("none");
		sidenav.classList.remove('hide');
		setTimeout(function (){
			sidenav.classList.remove('visualhide')
		}, 20);
	}
	else{
		console.log("yes");
		sidenav.classList.add('visualhide');
		sidenav.classList.add('hide');
	}
	}, false);