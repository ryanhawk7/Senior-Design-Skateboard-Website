window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  document.getElementById("navigationBar").style.backgroundColor = "black";
	} else {
		document.getElementById("navigationBar").style.backgroundColor = "transparent";
	}
}