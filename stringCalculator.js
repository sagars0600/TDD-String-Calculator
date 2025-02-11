function add(numbers) {
  if (numbers === "") return 0;

  const numArray = numbers
    .replace(/\n/g, ",") 
    .split(",")
    .map(Number);

  return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
