"use strict";
function isPrev(current, index, list) {
    return (current - 1 + list.length) % list.length === index;
}
function isNext(current, index, list) {
    return (current + 1 + list.length) % list.length === index;
}
function getImageClass(prefix, current, index, list) {
    var arr = [prefix + '-swiper__image', prefix + '-class-image'];
    if (isPrev(current, index, list)) {
        arr.push(prefix + '-class-prev-image');
    }
    if (isNext(current, index, list)) {
        arr.push(prefix + '-class-next-image');
    }
    return arr.join(' ');
}
export { isPrev };
export { isNext };
export { getImageClass };
export default { isPrev, isNext, getImageClass };
