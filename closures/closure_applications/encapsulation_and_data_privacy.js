function createCounter() {

    let count =0;

    return {
        increment: function() {
            count++;
            console.log(count);
        },

        decrement: function() {
            count--;
            console.log(count);
        },

        getCount: function(){
            return count;
        }
    }

}

const counter = createCounter();
counter.increment(); // Output: 1
counter.increment(); // Output: 2
console.log(counter.getCount()); // Output: 2