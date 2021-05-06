import { Movie } from "../models/Movie";
import placeholderPoster from "../resources/placeholder_poster.png";

const INVALID_MOVIE_POSTER_TEXT = "N/A";

interface IProps {
  imdbID: string;
  movie: Movie;
  buttonConfig: {
    disabled: boolean;
    className: string;
    title: string;
    onClick: (imdbID: string) => void;
  };
}

const classNameForPosterStatus = (hasPoster: boolean): string => {
  return hasPoster ? "movie-item-image" : "movie-item-placeholder-image";
};

const altTextForPosterStatus = (hasPoster: boolean, movie: Movie): string => {
  const movieDisplayTitle = `${movie.Title} (${movie.Year})`;
  if (hasPoster) {
    return `Movie poster for ${movieDisplayTitle}`;
  } else {
    return `Movie poster not found, showing placeholder for ${movieDisplayTitle}`;
  }
};

const MovieItemComponent = (props: IProps) => {
  const onClick = () => {
    props.buttonConfig.onClick(props.imdbID);
  };
  const hasPoster = props.movie.Poster !== INVALID_MOVIE_POSTER_TEXT;
  return (
    <div className={"movie-item-container"}>
      <img
        className={classNameForPosterStatus(hasPoster)}
        src={hasPoster ? props.movie.Poster : placeholderPoster}
        alt={altTextForPosterStatus(hasPoster, props.movie)}
      />
      <div className={"movie-item-title"}>
        {`${props.movie.Title} (${props.movie.Year})`}
      </div>
      <button
        className={props.buttonConfig.className}
        onClick={onClick}
        disabled={props.buttonConfig.disabled}
      >
        {props.buttonConfig.title}
      </button>
    </div>
  );
};

export default MovieItemComponent;
