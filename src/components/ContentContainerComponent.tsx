import { Movie } from "../models/Movie";
import NominationsListComponent from "./NominationsListComponent";
import SearchResultListComponent from "./SearchResultListComponent";

interface IProps {
  results: Movie[];
  nominations: Movie[];
  MAX_NOMINATION_LENGTH:number;
  query: string;
  searchResultError: Error | null;
  onAddNominationClick: (imdbID: string) => void;
  onRemoveNominationClick: (imdbID: string) => void;
}

const ContentContainerComponent = (props: IProps) => {
  return (
    <div className={"content-container"}>
      <SearchResultListComponent
        searchResultError={props.searchResultError}
        results={props.results}
        query={props.query}
        nominations={props.nominations}
        onAddNominationClick={props.onAddNominationClick}
      />
      <NominationsListComponent
        nominations={props.nominations}
        onRemoveNominationClick={props.onRemoveNominationClick}
        MAX_NOMINATION_LENGTH={props.MAX_NOMINATION_LENGTH}
      />
    </div>
  );
};

export default ContentContainerComponent;
