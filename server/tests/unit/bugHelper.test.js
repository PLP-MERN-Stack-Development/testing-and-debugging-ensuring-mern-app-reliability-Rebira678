const { validateBug } = require("../../src/utils/bugHelper");

test("validateBug returns true for valid bug", () => {
  const bug = { title: "Crash", description: "App crashes", status: "open" };
  expect(validateBug(bug)).toBe(true);
});
