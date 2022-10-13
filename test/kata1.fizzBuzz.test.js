const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  it("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
  it("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(5)).toEqual("Buzz");
  });
  it("returns FizzBuzz when passed a multiple of  3 and 5", () => {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
    expect(fizzBuzz(30)).toEqual("FizzBuzz");
    expect(fizzBuzz(90).toEqual("FizzBuzz"));
  });
  it("returns the number when it isn'y a multiple of 3 or 5", () => {
    expect(fizzBuzz(4)).toEqual(4);
    expect(fizzBuzz(11).toEqual(11));
  });
});
