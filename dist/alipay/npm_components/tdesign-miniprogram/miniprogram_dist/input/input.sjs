"use strict";
function getInputClass(classPrefix, suffix, align, disabled) {
    var className = [classPrefix + '__control'];
    if (align) {
        className.push(classPrefix + '--' + align);
    }
    if (disabled) {
        className.push(classPrefix + '__control--disabled');
    }
    return className.join(' ');
}
export { getInputClass };
export default {
    getInputClass: getInputClass
};
