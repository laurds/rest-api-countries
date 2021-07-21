import { useState, useEffect } from "react";

function useApi(init) {
  const [state, changeState] = useState(init);
  const [allCountries, fetchAllCountries] = useState([]);
  useEffect(() => {
    let baseUrl = 'https://restcountries.eu/rest/v2/all/';
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        changeState(data);
        fetchAllCountries(data);
      });
  }, []);

  return [state, allCountries, changeState];
}

export default useApi;
