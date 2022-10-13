const numberToReversedDigits = (number) => {
  const numsArr = Array.from(String(number), Number);
  return numsArr.reverse();
};

module.exports = numberToReversedDigits;
