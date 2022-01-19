const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const mobile_op = document.querySelector('.mobile-op');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
        mobile_op.classList.toggle('is-active')
	});

//background-color
window.onload = function () {
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 100) {
			document.querySelector(".navi").classList.add('is-scrolling');
		} else {
			document.querySelector(".navi").classList.remove('is-scrolling');
		}
	})};

//hide-nav
var prevScrollpos = window.pageYOffset;
	window.onscroll = function() {
	  var currentScrollPos = window.pageYOffset + 200;
	  if (prevScrollpos > currentScrollPos) {
		document.querySelector(".navv").style.top = "0px";
		document.querySelector(".navm").style.top = "0px";document.querySelector(".navv").style.paddingTop = "20px";
		document.querySelector(".navm").style.paddingTop = "10px";
		document.querySelector(".navv").style.paddingBottom = "20px";
		document.querySelector(".navm").style.paddingBottom = "20px";

	  } else {
		document.querySelector(".navv").style.top = "-100px";
		document.querySelector(".navm").style.top = "-100px";
	  }
	  prevScrollpos = currentScrollPos;
	  console.log(prevScrollpos);
	};

