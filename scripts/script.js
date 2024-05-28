/* toggle between navbar sizes depending on screen size */
function toggleNavbar()
{
	var x = document.getElementById( "navigation_bar" );
	if( x.className === "navbar" )
		x.className += " responsive";
	else
		x.className = "navbar";
}

/* change hamburger to X */
function toggleHamburger(x)
{
	x.classList.toggle( "change" )
}

/* make navbar scroll up and down on scroll */
var prev_scroll = window.pageYOffset;
window.onscroll = function() {
	if( window.innerWidth > 1100 )
	{
		var current_scroll = window.pageYOffset;
		if( prev_scroll >= current_scroll )
		{
			document.getElementById( "navigation_bar" ).style.top = "0";
			document.getElementById( "navigation_bar" ).style.transition = "top 0.4s ease-in";
		}
		else
		{
			document.getElementById( "navigation_bar" ).style.top = "-100px";
			document.getElementById( "navigation_bar" ).style.transition = "top 0.4s ease-out";
		}
		prev_scroll = current_scroll;
	}
	else
	{
		document.getElementById( "navigation_bar" ).style.top = "0";
		document.getElementById( "navigation_bar" ).style.transition = "top 0.4s ease-in";
	}
}
