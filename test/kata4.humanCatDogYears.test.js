const { humanCatDogYears } = require("../src");

// Look Ma, no handlebars!!!
describe("humanCatDogYears", () => {
  it("represents human years to cats and dogs", () => {
    expect(Array.isArray(humanCatDogYears())).toBe(true);
  });
});
