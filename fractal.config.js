'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Waffle Design System');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'src/components'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'src/docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'src/public'));

/*
 * Tell the Fractal where to build
 */
fractal.web.set('builder.dest', __dirname + '/docs');

// require the Mandelbrot theme module
const mandelbrot = require('@frctl/mandelbrot');

// create a new instance with custom config options
const myCustomisedTheme = mandelbrot({
    skin: 'aqua',
    highlightStyles: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.2.0/styles/atom-one-dark.min.css',
    favicon: '/theme/favicon.ico',
});


// tell Fractal to use the configured theme by default
fractal.web.theme(myCustomisedTheme);

