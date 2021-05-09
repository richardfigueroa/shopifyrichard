import SearchBarComponent from "./SearchBarComponent";

interface IProps {
  input: string;
  onChange: (text: string) => void;
}

const SearchContainerComponent = ({ input, onChange }: IProps) => {
  return (
    <div className={"search-container"}>
      <div className={"search-title-label"}>Welcome to the Shoppies Award page!</div>
      <div className={"search-title-label"}>Here you can nomiate up to 5 movies for the award show.</div>
      <div className={"search-title-label"}>Use the searchbar below to find and nomiate your favorite movie. </div>
      <SearchBarComponent input={input} onChange={onChange} />
    </div>
  );
};

export default SearchContainerComponent;
