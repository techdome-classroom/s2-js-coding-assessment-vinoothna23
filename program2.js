/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = {
        'I': 1,'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    };
    
    let t= 0;
    let prev= 0;
    
    for (let i = s.length - 1; i >= 0; i--) {
        const curr= romanMap[s[i]];
        
        if (curr< prev) {
            t -= cur;
        } else {
            total += current;
            prevValue = current;
        }
    }
    
    return total;
    
};


module.exports={romanToInt}

