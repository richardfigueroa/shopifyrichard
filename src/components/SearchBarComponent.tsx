interface IProps {
  input: string;
  onChange: (text: string) => void;
}

const SearchBarComponent = ({ input, onChange }: IProps) => {
  return (
    <input
      className={"search-bar"}
      value={input}
      placeholder={"Search for a movie here."}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBarComponent;
