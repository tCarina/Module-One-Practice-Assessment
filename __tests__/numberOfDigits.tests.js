const numberOfDigits = require("./../problems/numberOfDigits.js")

test('Returns the correct number of digits', () => {
  expect(numberOfDigits(4)).toBe(1)
  expect(numberOfDigits(14)).toBe(2)
  expect(numberOfDigits(8473)).toBe(4)
  expect(numberOfDigits(73746)).toBe(5)
})
