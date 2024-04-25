"use strict";
function getPopupStyles(zIndex) {
    var zIndexStyle = zIndex ? 'z-index:' + zIndex + ';' : '';
    return zIndexStyle;
}
function onContentTouchMove(e) {
    if (e.target.dataset.prevention) {
        return false;
    }
    ;
}
export { getPopupStyles };
export { onContentTouchMove };
export default {
    getPopupStyles: getPopupStyles,
    onContentTouchMove: onContentTouchMove
};
