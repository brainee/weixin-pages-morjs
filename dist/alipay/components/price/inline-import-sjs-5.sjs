"use strict";
var REGEXP = getRegExp('^\d+(\.\d+)?$');
function addUnit(value) {
    if (value == null) {
        return '';
    }
    return REGEXP.test('' + value) ? value + 'rpx' : value;
}
export { addUnit };
export default {
    addUnit: addUnit
};
