const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns string yes when passed true", () => {
    expect(booleanToWord(true)).toBe("Yes");
  });
  test("returns string no when passed false", () => {
    expect(booleanToWord(false)).toBe("No");
  });
});
