import SearchBarComponent from "./SearchBarComponent";
import vid from '../resources/movie-montage.mp4';

interface IProps {
  input: string;
  onChange: (text: string) => void;
}

const SearchContainerComponent = ({ input, onChange }: IProps) => {
  return (
    <div className={"video-container"}>
      <video autoPlay muted loop className="myVideo">
        <source src={vid} type="video/mp4" />
      </video>
      <div className="video-container-content">
        <div className={"search-container"}>
          <div className={"search-title-label"}>Welcome to the Shoppies Award page!</div>
          <div className={"search-title-label"}>Here you can nominate up to 5 movies for the award show.</div>
          <div className={"search-title-label"}>Use the searchbar below to find and nomiate your favorite movie. </div>
          <SearchBarComponent input={input} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default SearchContainerComponent;
