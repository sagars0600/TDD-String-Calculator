function add(numbers) {
  if (numbers === "") return 0;

  let delimiters = [",", "\n"]; // Default delimiters: comma and newline

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n", 2);
    const customDelimiterSection = parts[0].substring(2);

    const delimiterMatch = customDelimiterSection.match(/\[(.*?)\]/g);

    if (delimiterMatch) {
      delimiters = delimiterMatch.map((d) => d.slice(1, -1));
    } else {
      delimiters = [customDelimiterSection];
    }

    numbers = parts[1];
  }

  const delimiterRegex = new RegExp(
    delimiters.map((d) => escapeRegex(d)).join("|")
  );

  const numArray = numbers
    .split(delimiterRegex)
    .map(Number)
    .filter((num) => num <= 1000);

  const negativeNumbers = numArray.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed: ${negativeNumbers.join(", ")}`
    );
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}

function escapeRegex(str) {
  return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

module.exports = { add };
