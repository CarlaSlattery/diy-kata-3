const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(123)).toEqual([3, 2, 1]);
    expect(numberToReversedDigits(39681)).toEqual([1, 8, 6, 9, 3]);
  });
});
