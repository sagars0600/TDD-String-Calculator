function add(numbers) {
  if (numbers === "") return 0;
  return parseInt(numbers); // Handle single number case
}

module.exports = { add };
