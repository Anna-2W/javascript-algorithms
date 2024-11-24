const isEmptyArray = require('../src/isEmptyArray');

test('should return true for an empty array', () => {
    expect(isEmptyArray([])).toBe(true);
});

test('should return false for a non-empty array', () => {
    expect(isEmptyArray([1, 2, 3])).toBe(false);
});

test('should return false for non-array inputs', () => {
    expect(isEmptyArray(null)).toBe(false);
    expect(isEmptyArray({})).toBe(false);
});
