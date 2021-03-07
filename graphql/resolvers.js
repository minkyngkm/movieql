// resolve query
import { getById, addMovie, getMovies, deleteMovie } from "./db";
const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => {
      return getById(id);
    },
  },

  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;

// instead of writing 'root' or 'source' I write _

// query is used for SELECT ( GET in REST apis )
// mutation is used for INSERT/UPDATE/DELETE ( POST, PUT, PATCH, DELETE in REST apis)
