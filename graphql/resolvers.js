// resolve query
import { people, getById } from "./db";
const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => {
      return getById(id);
    },
  },
};

export default resolvers;

// instead of writing 'root' or 'source' I write _
