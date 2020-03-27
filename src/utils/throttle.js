/**
 * @param {Funtion} fn 
 * @param {Number} wait 
 * @returns {Funtion}
 */
export default (fn, wait=200) => {
    let last, timer;
    return function(...args) {
        let now = +new Date();
        if (now - last < wait) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                last = now;
                fn.apply(this, args);
            }, wait);
        } else {
            last = now;
            fn.apply(this, args);
        }
    }
}  