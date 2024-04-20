let counter =0;

const getData = ()=>{
    // make api call
    console.log("Fetching data..." + counter++);
}

const doSomeMagic = function(fn, d) {

    let timer;
    return function() {
        let context = this,
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context,arguments);
        }, d);
    }
}

const betterFunction = doSomeMagic(getData, 1000);


/*
Debouncing is a strategy used to improve the performance of a
feature by controlling the time at which a function should be
executed. Debouncing accepts a function and transforms it in
to an updated (debounced) function so that the code inside
the original function is executed after a certain period of time.
*/