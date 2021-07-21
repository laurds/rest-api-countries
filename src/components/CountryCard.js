import React from "react";
import PropTypes from "prop-types";
import { Card, CardImage, CardContent } from "../styles/CountryCardStyle";

function CountryCard({ flag, name, population, region, capital, push, theme }) {
  const handleClick = () => {
    push(`/detail/${name}`);
  };
  return (
    <Card theme={theme} onClick={() => handleClick()}>
      <CardImage>
        <img src={flag} alt={`${name} flag`} />
      </CardImage>
      <CardContent>
        <h4>{name}</h4>
        <div>
          <p>Population:&nbsp;</p>
          {population.toLocaleString()}
        </div>
        <div>
          <p>Region:&nbsp;</p>
          {region}
        </div>
        <div>
          <p>Capital:&nbsp;</p>
          {capital}
        </div>
      </CardContent>
    </Card>
  );
}

CountryCard.propTypes = {
  flag: PropTypes.string,
  name: PropTypes.string.isRequired,
  population: PropTypes.any,
  region: PropTypes.string,
  capital: PropTypes.string,
  push: PropTypes.func.isRequired,
};

export default CountryCard;
