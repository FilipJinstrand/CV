var typed2 = new Typed('#typed', {
    strings: ['Programmer ^4000'],
    typeSpeed: 50,
    backSpeed: 20,
    smartBackspace: true,
    loop: true
});

window.onload = function onLoad() {
    var csBar = new ProgressBar.Line("#progress-cs", {
        strokeWidth: 10,
        easing: 'easeOut',
        duration: 10000,
        color: '#55DDE0',
        trailColor: '#2F4858',
        trailWidth: 1,
        svgStyle: { width: '100%', height: '100%' }
    });

    csBar.animate(0.75);

    var jsBar = new ProgressBar.Line("#progress-js", {
        strokeWidth: 10,
        easing: 'easeOut',
        duration: 10000,
        color: '#55DDE0',
        trailColor: '#2F4858',
        trailWidth: 1,
        svgStyle: { width: '100%', height: '100%' }
    });

    jsBar.animate(0.25);

    var sqlBar = new ProgressBar.Line("#progress-sql", {
        strokeWidth: 10,
        easing: 'easeOut',
        duration: 10000,
        color: '#55DDE0',
        trailColor: '#2F4858',
        trailWidth: 1,
        svgStyle: { width: '100%', height: '100%' }
    });

    sqlBar.animate(0.55);

    var htmlBar = new ProgressBar.Line("#progress-html", {
        strokeWidth: 10,
        easing: 'easeOut',
        duration: 10000,
        color: '#55DDE0',
        trailColor: '#2F4858',
        trailWidth: 1,
        svgStyle: { width: '100%', height: '100%' }
    });

    htmlBar.animate(0.65);

    var engBar = new ProgressBar.Line("#progress-eng", {
        strokeWidth: 10,
        easing: 'easeOut',
        duration: 10000,
        color: '#55DDE0',
        trailColor: '#2F4858',
        trailWidth: 1,
        svgStyle: { width: '100%', height: '100%' }
    });

    engBar.animate(1);

    var sweBar = new ProgressBar.Line("#progress-swe", {
        strokeWidth: 10,
        easing: 'easeOut',
        duration: 10000,
        color: '#55DDE0',
        trailColor: '#2F4858',
        trailWidth: 1,
        svgStyle: { width: '100%', height: '100%' }
    });

    sweBar.animate(1);

    var gerBar = new ProgressBar.Line("#progress-ger", {
        strokeWidth: 10,
        easing: 'easeOut',
        duration: 10000,
        color: '#55DDE0',
        trailColor: '#2F4858',
        trailWidth: 1,
        svgStyle: { width: '100%', height: '100%' }
    });

    gerBar.animate(0.20);
};

