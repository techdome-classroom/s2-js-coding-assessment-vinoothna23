/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const sk= [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of s) {
        if (map[char]) {
            sk.push(char);
        } else {
            if (sk.length === 0 || map[sk.pop()] !== char) {
                return false;
            }
        }
    }
    return sk.length === 0;
    
};

module.exports = { isValid };