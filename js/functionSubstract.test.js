const {
  substract
} = require('./functionSubstract');

// console.log(sum(2,3));
describe('function substract', () => {
  // const c = 'b';
  // const c = 'b';
  const c = 3;
  const d = 2;
  // const result = c-d;
  // console.log(result)
  // test('toEqual number', () => {
    // expect(substract(c, d)).toEqual(expect.any(Number));
    // expect(substract(c, d)).toBe("number")
    // expect(typeof result).toBe('number')
    // expect(substract(c, d)).toBe(Number)
  // });
  test('sub 1-2', () => {
    expect(substract(1, 2)).toBe(-1);
  });
  test('adds 10 - 8 to equal 2', () => {
    expect(substract(10, 8)).toBe(2);
  });
});