let count =0;
function callMe() {
    // make api call
    console.log("event fired" + count++);
}

const throttle = function(fn, delay) {

    let inThrottle;

    return function() {
        let context = this,
        args = arguments;

        if(!inThrottle) {
            fn.call(context, args);
            inThrottle= true;
            setTimeout(() => {
                inThrottle = false;
            }, delay);
        }
    }
}

const betterFunction =  throttle(callMe, 1000);

/*
Throttling in JavaScript is a technique used to control the rate at which a function is executed.
It ensures that the function is not called more often than a certain limit, regardless of how
frequently the event triggering the function occurs.
*/