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

