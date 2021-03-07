export let movies = [
  { id: 1, name: "Min", score: 15, gender: "female" },
  {
    id: 2,
    name: "Apple",
    score: 12,
  },
  {
    id: 3,
    name: "Banana",
    score: 10,
  },
  {
    id: 4,
    name: "Cake",
    score: 15,
  },
  {
    id: 5,
    name: "Deer",
    score: 25,
  },
  {
    id: 6,
    name: "Fish",
    score: 13,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovie = movies.filter((movie) => movie.id === id);
  return filteredMovie[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
