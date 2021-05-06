import { Movie } from "../models/Movie";

const findMovieByImdbId = (imdbID: string, movies: Movie[]): Movie | null => {
  for (var i = 0; i < movies.length; i++) {
    const movie = movies[i];
    if (movie.imdbID === imdbID) {
      return movie;
    }
  }
  return null;
};

export default findMovieByImdbId;
