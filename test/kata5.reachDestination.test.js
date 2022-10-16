const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(90, 45)).toEqual("I should be there in 2 hours.");
  });
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(30, 63)).toEqual("I should be there in 0.5 hours.");
  });
});
