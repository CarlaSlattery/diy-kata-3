const joinNames = (namesObj) => {
  const names = Object.values(namesObj).map((i) => i.name);
  return `${names.slice(0, -1).join(", ")} & ${names.slice(-1)}`;
};

module.exports = joinNames;
