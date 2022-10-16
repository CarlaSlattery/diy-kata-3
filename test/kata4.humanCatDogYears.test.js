const { humanCatDogYears } = require("../src");

// Look Ma, no handlebars!!!
describe("humanCatDogYears", () => {
  it("represents human years to cats and dogs", () => {
    expect(humanCatDogYears(5)).toEqual([5, 36, 39]);
  });
  it("represents human years to cats and dogs", () => {
    expect(humanCatDogYears(0)).toEqual([0, 0, 0]);
  });
});
