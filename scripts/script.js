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
