const mult = require('../src/mult');

it('should return correct multiplication', () => {
    const result = mult(5, 4);
    expect(result).toBe(20);
});
