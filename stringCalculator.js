function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = ",";
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const delimiterMatch = parts[0].match(/\[(.*?)\]/);
    delimiter = delimiterMatch ? delimiterMatch[1] : parts[0].substring(2);
    numbers = parts[1];
  }

  const numArray = numbers
    .split(new RegExp(`[${delimiter}\n]`))
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

module.exports = { add };
