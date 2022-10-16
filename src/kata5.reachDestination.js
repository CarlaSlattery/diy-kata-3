const reachDestination = (distance, speed) => {
  const estimatedTime = Math.round((distance / speed) * 2) / 2;
  return `I should be there in ${estimatedTime} hours.`;
};

module.exports = reachDestination;
