// resolve query
import { getMovies } from "./db";
const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
  },
};

export default resolvers;

// instead of writing 'root' or 'source' I write _

// query is used for SELECT ( GET in REST apis )
// mutation is used for INSERT/UPDATE/DELETE ( POST, PUT, PATCH, DELETE in REST apis)
