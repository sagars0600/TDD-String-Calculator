function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = ",";
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = parts[0].substring(2);
    numbers = parts[1];
  }

  const numArray = numbers
    .split(new RegExp(`[${delimiter}\n]`)) // Split by the custom delimiter or new lines
    .map(Number);

  return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
