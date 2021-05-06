import { Movie } from "../models/Movie";
import MovieItemComponent from "./MovieItemComponent";

interface IProps {
  key: string;
  imdbID: string;
  result: Movie;
  isNominated: boolean;
  onAddNominationClick: (imdbID: string) => void;
}

const SearchResultComponent = (props: IProps) => {
  return (
    <MovieItemComponent
      imdbID={props.imdbID}
      movie={props.result}
      buttonConfig={{
        disabled: props.isNominated,
        className: "base-button nominate-button",
        title: "Nominate",
        onClick: props.onAddNominationClick,
      }}
    />
  );
};

export default SearchResultComponent;
