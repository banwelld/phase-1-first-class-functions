function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    function thisIsStupid() {
        console.log("This is stupid!");
    }
    return thisIsStupid;
}

function returnsAnAnonymousFunction() {
    return () => console.log("This is stupid!");
}