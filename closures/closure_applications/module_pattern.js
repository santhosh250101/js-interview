const myModule = (function() {

    let privateData = "I am private data";

    function privateMethod() {
        console.log(privateData);
    }

    return {
        publicMethod: function() {
            privateMethod();
        }
    }
})();


myModule.publicMethod();