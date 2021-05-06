import { Movie } from "../models/Movie";
import MovieItemComponent from "./MovieItemComponent";

interface IProps {
  key: string;
  imdbID: string;
  nomination: Movie;
  onRemoveNominationClick: (imdbID: string) => void;
}

const NominationComponent = (props: IProps) => {
  return (
    <MovieItemComponent
      imdbID={props.imdbID}
      movie={props.nomination}
      buttonConfig={{
        disabled: false,
        className: "base-button remove-button",
        title: "Remove",
        onClick: props.onRemoveNominationClick,
      }}
    />
  );
};

export default NominationComponent;
