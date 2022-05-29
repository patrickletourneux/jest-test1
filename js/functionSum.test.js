const {
  sum
} = require('./functionSum');

// console.log(sum(2,3));
describe('function sum', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  test('adds 10 + 111 to equal 121', () => {
    expect(sum(10, 111)).toBe(121);
  });
});