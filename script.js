console.log('script run');
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('On vous rappelle sous 24h <br/>')
    .pauseFor(500)
    .typeString('Digitalisation en main')
    .pauseFor(2500)
    .start();

    //Smooth scroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
    });
    console.log(scroll);




    	// init controller
	// var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: "100%"}});

	// // build scenes
	// new ScrollMagic.Scene({triggerElement: "#home"})
	// 				.setClassToggle("#high-home", "activeLink") // add class toggle
	// 				.addTo(controller);
	// new ScrollMagic.Scene({triggerElement: "#services"})
	// 				.setClassToggle("#high-services", "activeLink") // add class toggle
	// 				.addTo(controller);
	// new ScrollMagic.Scene({triggerElement: "#sec3"})
	// 				.setClassToggle("#high-sommes-nous", "activeLink") // add class toggle
	// 				.addTo(controller);
	// new ScrollMagic.Scene({triggerElement: "#sec4"})
    //                 .setClassToggle("#high-realisations", "activeLink") // add class toggle
    //                 .addTo(controller);
    // new ScrollMagic.Scene({triggerElement: "#sec9"})
    //                 .setClassToggle("#high-equipes", "activeLink") // add class toggle
    //                 .addTo(controller);
    // new ScrollMagic.Scene({triggerElement: "#sec8"})
    //                 .setClassToggle("#high-clients", "activeLink") // add class toggle
    //                 .addTo(controller);
    // new ScrollMagic.Scene({triggerElement: "#testimonial"})
    //                 .setClassToggle("#high-testimonial", "activeLink") // add class toggle
    //                 .addTo(controller);
    // new ScrollMagic.Scene({triggerElement: "#sec2"})
    //                 .setClassToggle("#high-pricing", "activeLink") // add class toggle
    //                 .addTo(controller);
    // new ScrollMagic.Scene({triggerElement: "#sec1"})
    //                 .setClassToggle("#high-contact", "activeLink") // add class toggle
    //                 .addTo(controller);