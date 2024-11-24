/**
 * @returns {Function} A function that returns the string "Hello World".
 */

var createHelloWorld = function() {
    return function() {
        return "Hello World";
    };
};

module.exports = createHelloWorld;
