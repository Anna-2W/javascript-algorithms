const createHelloWorld = require('../../src/closures/createHelloWorld');

test('createHelloWorld should return a function', () => {
    const result = createHelloWorld();
    expect(typeof result).toBe('function');
});

test('The returned function should return "Hello World"', () => {
    const helloFunction = createHelloWorld();
    expect(helloFunction()).toBe('Hello World');
});
