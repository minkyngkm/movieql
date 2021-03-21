import fetch from "node-fetch";
// intergate my sever with other url
const API_URL = "https://yts.mx/api/v2";

export const getMovies = (limit, rating) => {
  let REQUEST_URL = `${API_URL}/list_movies.json?`;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  return fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};

export const getMovie = (id) => {
  return fetch(`${API_URL}/movie_details.json?movie_id=${id}`)
    .then((res) => res.json())
    .then((json) => json.data.movie);
};

export const getSuggestions = (id) => {
  return fetch(`${API_URL}/movie_suggestions.json?movie_id=${id}`)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};
