const findTheOldest = function (people) {
  const peopleWithAges = people.map((obj) => {
    "yearOfDeath" in obj
      ? (obj.age = obj.yearOfDeath - obj.yearOfBirth)
      : (obj.age = new Date().getFullYear() - obj.yearOfBirth);
    return obj;
  });
  return peopleWithAges.sort((a, b) => b.age - a.age)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
