export const people = [
  { id: 1, name: "Min", age: 15, gender: "female" },
  {
    id: 2,
    name: "Apple",
    age: 12,
    gender: "female",
  },
  {
    id: 3,
    name: "Banana",
    age: 10,
    gender: "female",
  },
  {
    id: 4,
    name: "Cake",
    age: 15,
    gender: "male",
  },
  {
    id: 5,
    name: "Deer",
    age: 25,
    gender: "male",
  },
  {
    id: 6,
    name: "Fish",
    age: 13,
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};
