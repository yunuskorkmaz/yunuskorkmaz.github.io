/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-fixed' ),
        h1 = document.querySelector('.navbar-fixed nav');
        header2 = document.querySelector('.button-collapse'),
		didScroll = false,
		changeHeaderOn = 150;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 200 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'fixoff' );
            classie.add(header2, 'fixoff2');
            classie.add(h1,'teal');
		}
		else {
			classie.remove( header, 'fixoff' );
            classie.remove(header2, 'fixoff2');
            classie.remove(h1,'teal');
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();