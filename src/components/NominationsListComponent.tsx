import { Movie } from "../models/Movie";
import NominationComponent from "./NominationComponent";
import checkmark from "../resources/checkmark.png";

interface IProps {
  nominations: Movie[];
  MAX_NOMINATION_LENGTH: number;
  onRemoveNominationClick: (imdbID: string) => void;
}

const NominationsListComponent = (props: IProps) => {
  let banner = <div></div>;
  if (props.nominations.length >= props.MAX_NOMINATION_LENGTH) {
    banner = <div className="nomination-banner">
      You have successfully added 5 movie nominations!
      <img src={checkmark} alt="checkmark" height="36px" width="36px"/>
    </div>;
  }
  else{
    banner = <div></div>;
  }
  return (
    <div className={"content-list-container"}>
      <div className={"content-list-header"}>Nominations</div>
      {banner}
      {props.nominations.map((nomination) => {
        return (
          <NominationComponent
            key={nomination.imdbID}
            imdbID={nomination.imdbID}
            nomination={nomination}
            onRemoveNominationClick={props.onRemoveNominationClick}
          />
        );
      })}
    </div>
  );
};

export default NominationsListComponent;
