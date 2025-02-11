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

//test 1
test("should return 0 for an empty string", () => {
  const input = "";
  const expected = 0;
  const result = add(input);

  logTestResult("should return 0 for an empty string", input, expected, result);

  expect(result).toBe(expected);
});

//test 2
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

//test 3
test("should return the sum of two comma-separated numbers", () => {
  const input = "1,2";
  const expected = 3;
  const result = add(input);

  logTestResult(
    "should return the sum of two comma-separated numbers",
    input,
    expected,
    result
  );

  expect(result).toBe(expected);
});

//test4
test("should return the sum when numbers are separated by commas and new lines", () => {
  const input = "1\n2,3";
  const expected = 6;
  const result = add(input);

  logTestResult(
    "should return the sum when numbers are separated by commas and new lines",
    input,
    expected,
    result
  );

  expect(result).toBe(expected);
});

//test 5

test("should support custom delimiters specified at the beginning of the string", () => {
  const input = "//;\n1;2";
  const expected = 3;
  const result = add(input);

  logTestResult(
    "should support custom delimiters specified at the beginning of the string",
    input,
    expected,
    result
  );

  expect(result).toBe(expected);
});
