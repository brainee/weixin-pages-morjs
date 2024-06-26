"use strict";
/* eslint-disable */
function animate(options) {
    var result = [];
    if (options.duration) {
        result.push('transition-duration: ' + options.duration + 's');
        result.push('transform: translate3d( ' + -100 * options.currentIndex + '%,0, 0)');
    }
    return result.join(';');
}
export { animate };
export default {
    animate: animate
};
