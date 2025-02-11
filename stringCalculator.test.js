const { add } = require("./stringCalculator");

function logTestResult(testName, input, expected, result) {
  console.log(`
  ==============================
  Test: ${testName}
  Input: "${input}"
  Expected: ${expected}
  Result: ${result}
  ==============================
  `);
}

test("should return 0 for an empty string", () => {
  const input = "";
  const expected = 0;
  const result = add(input);

  logTestResult("should return 0 for an empty string", input, expected, result);

  expect(result).toBe(expected);
});

test("should return the number itself when a single number is provided", () => {
  const input = "1";
  const expected = 1;
  const result = add(input);

  logTestResult(
    "should return the number itself when a single number is provided",
    input,
    expected,
    result
  );

  expect(result).toBe(expected);
});
