import React, { useState } from "react";
import { Movie } from "./models/Movie";
import "./App.css";
import TitleComponent from "./components/TitleComponent";
import SearchContainerComponent from "./components/SearchContainerComponent";
import ContentContainerComponent from "./components/ContentContainerComponent";
import debounce from "./helpers/debounce";
import searchMoviesWithQuery from "./helpers/omdb_api";
import findMovieByImdbId from "./helpers/movie_array_helpers";
import useLocalStorage from "./helpers/local_storage_hook";
import AttributionComponent from "./components/AttributionComponent";
import SweetAlert from 'react-bootstrap-sweetalert';


const DEBOUNCE_DURATION = 500;
const MAX_NOMINATION_LENGTH = 5;
const LOCAL_STORAGE_NOMINATIONS_KEY = "nominations";


function App() {
  const [atMax, setAtMax] = useState(false);
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState(Array<Movie>());
  const [nominations, setNominations] = useLocalStorage(
    LOCAL_STORAGE_NOMINATIONS_KEY,
    Array<Movie>()
  );
  const [searchResultError, setSearchResultError] = useState<Error | null>(
    null
  );

  const hideAlert = async () => {
    setAtMax(false);
  }

  const addNomination = async (imdbID: string) => {
    if (nominations.length >= MAX_NOMINATION_LENGTH) {
      setAtMax(true);
      return ;
    }

    const movie = findMovieByImdbId(imdbID, searchResults);

    if (movie !== null) {
      setNominations((previousNominations: Movie[]) => {
        const existingNominations = [...previousNominations];
        existingNominations.push(movie);
        return existingNominations;
      });
    }
  };

  const removeNomination = async (imdbID: string) => {
    setNominations((previousNominations: Movie[]) => {
      const existingNominations = previousNominations.filter(
        (nomination: Movie) => nomination.imdbID !== imdbID
      );
      return existingNominations;
    });
  };

  const performSearch = async (query: string) => {
    searchMoviesWithQuery(query, (results, error) => {
      setSearchResults(results);
      setSearchResultError(error);
    });
  };

  const onSearchBarTextChange = async (text: string) => {
    setInput(text);
    const debouncedFunction = debounce(function () {
      performSearch(text);
    }, DEBOUNCE_DURATION);
    debouncedFunction();
  };

  let alert = <div/>;

  if(atMax === true){
    alert = <SweetAlert danger title="Cannot add Nomination." onConfirm={hideAlert}>You cannot add more than 5 nominations. Please remove one if you wish to add another.</SweetAlert>;
  } else{
    alert = <div/>;
  }
  return (
    <div className="app-container">
      <TitleComponent />
      <SearchContainerComponent
        input={input}
        onChange={onSearchBarTextChange}
      />
      <div>
      {alert}

      </div>
      <ContentContainerComponent
        searchResultError={searchResultError}
        results={searchResults}
        nominations={nominations}
        query={input}
        onAddNominationClick={addNomination}
        onRemoveNominationClick={removeNomination}
        MAX_NOMINATION_LENGTH={MAX_NOMINATION_LENGTH}
      />
      <AttributionComponent />
    </div>
  );
}

export default App;