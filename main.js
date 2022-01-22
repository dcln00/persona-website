const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const mobile_op = document.querySelector('.mobile-op');
const mobile_menu_close = document.querySelector('.menu-close');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
        mobile_op.classList.toggle('is-active');
	});

	mobile_menu_close.addEventListener('click', function () {
		mobile_menu.classList.remove('is-active');
		menu_btn.classList.remove('is-active');
		mobile_op.classList.remove('is-active');
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
var prevScrollPos;
	window.onscroll = function() {
	  var currentScrollPos = window.pageYOffset;
	   if (prevScrollPos > currentScrollPos) {
		document.querySelector(".navi").style.top = "0px";
		document.querySelector(".navm").style.top = "0px";document.querySelector(".navi").style.paddingTop = "20px";
		document.querySelector(".navm").style.marginTop = "10px";
		document.querySelector(".navi").style.paddingBottom = "20px";
		document.querySelector(".navm").style.marginBottom = "20px";
		prevScrollpos = currentScrollPos;

	  } else if (currentScrollPos > prevScrollPos + 20) {
		document.querySelector(".navi").style.top = "-100px";
		document.querySelector(".navm").style.top = "-100px";
	  }
	  prevScrollPos = currentScrollPos;
	};

