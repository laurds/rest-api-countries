import React, { useContext } from "react";
import PropTypes from "prop-types";
import { allCountriesData } from "../contexts/state.context";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { StartPage, UserInputFields } from "../styles/HomepageStyle";
import {
  BackButton,
  CountryDetail,
  CContent,
  CSection,
  CountryFlag,
  Button,
} from "../styles/CDetailStyle";

function CountryDetails({ match, history, theme }) {
  const allCountries = useContext(allCountriesData);

  const countryFound = allCountries.find(
    (s) => s.name.toLowerCase() === match.params.id.toLowerCase()
  );

  const displayNameFromCode = (borderCode) => {
    const borderCountry = allCountries.find(
      (coun) => coun.alpha3Code === borderCode
    );
    return (
      <Button
        theme={theme}
        key={borderCountry.alpha3Code}
        onClick={() => history.push(`/detail/${borderCountry.name}`)}
      >
        {borderCountry.name}
      </Button>
    );
  };

  const print = countryFound ? (
    <CountryDetail>
      <CountryFlag
        src={countryFound.flag}
        alt={`flag of ${countryFound.name}`}
      />
      <CContent>
        <h2>{countryFound.name}</h2>
        <section>
          <CSection>
            <p>
              <strong>Native Name: </strong>
              {countryFound.nativeName}
            </p>
            <p>
              <strong>Population: </strong>
              {countryFound.population.toLocaleString()}
            </p>
            <p>
              <strong>Region: </strong>
              {countryFound.region}
            </p>
            <p>
              <strong>Sub Region: </strong>
              {countryFound.subregion}
            </p>
            <p>
              <strong>Capital: </strong>
              {countryFound.capital}
            </p>
          </CSection>
          <CSection>
            <p>
              <strong>Top Level Domain: </strong>
              {countryFound.topLevelDomain.join(", ")}
            </p>
            <p>
              <strong>Currencies: </strong>
              {countryFound.currencies.map((c) => c.name).join(", ")}
            </p>
            <p>
              <strong>Language: </strong>
              {countryFound.languages.map((l) => l.name).join(", ")}
            </p>
          </CSection>
        </section>
        {countryFound?.borders.length !== 0 && (
          <CSection>
            <strong>Border Countries:</strong>
            <div>{countryFound.borders.map((b) => displayNameFromCode(b))}</div>
          </CSection>
        )}
      </CContent>
    </CountryDetail>
  ) : (
    <div>Country doesn't exist.</div>
  );

  // return countryFound ? showDetails : notFound;
  return (
    <StartPage>
      <UserInputFields>
        <BackButton onClick={() => history.push("/")} theme={theme}>
          <ArrowBackIcon fontSize="small" />
          Back
        </BackButton>
      </UserInputFields>
      {print}
    </StartPage>
  );
}

CountryDetails.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default CountryDetails;
