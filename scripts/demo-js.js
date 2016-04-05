$(function(){
  $("#slides").slidesjs({
	width: 980,
	height: 420,
	navigation: {
		  active: false,
			// [boolean] Generates next and previous buttons.
			// You can set to false and use your own buttons.
			// User defined buttons must have the following:
			// previous button: class="slidesjs-previous slidesjs-navigation"
			// next button: class="slidesjs-next slidesjs-navigation"
		  effect: "slide"
			// [string] Can be either "slide" or "fade".
		},
	pagination: {
		  active: true,
			// [boolean] Create pagination items.
			// You cannot use your own pagination. Sorry.
		  effect: "slide"
			// [string] Can be either "slide" or "fade".
		},
	play: {
		  active: false,
			// [boolean] Generate the play and stop buttons.
			// You cannot use your own buttons. Sorry.
		  effect: "slide",
			// [string] Can be either "slide" or "fade".
		  interval: 5000,
			// [number] Time spent on each slide in milliseconds.
		  auto: true,
			// [boolean] Start playing the slideshow on load.
		  swap: false,
			// [boolean] show/hide stop and play buttons
		  pauseOnHover: false,
			// [boolean] pause a playing slideshow on hover
		  restartDelay: 2500
			// [number] restart delay on inactive slideshow
		},
	effect: {
		  slide: {
			// Slide effect settings.
			speed: 200
			  // [number] Speed in milliseconds of the slide animation.
		  },
		  fade: {
			speed: 300,
			  // [number] Speed in milliseconds of the fade animation.
			crossfade: true
			  // [boolean] Cross-fade the transition.
		  }
		}

  });
});
