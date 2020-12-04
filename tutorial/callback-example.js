function f(callback) {
    // code
    callback();
}


console.log("A");
f(() => {
    for (let index = 0; index < 10; index++) {
        console.log('Hello World');
    }
});
console.log("B");
