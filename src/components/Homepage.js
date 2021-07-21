import React, { useContext } from "react";
import PropTypes from "prop-types";
import CountryCard from "./CountryCard";
import { cards } from "../contexts/state.context";
import useInput from "../customhook/useInput";
import SearchIcon from "@material-ui/icons/Search";
import {
  StartPage,
  UserInputFields,
  SearchInput,
  CardContainer,
} from "../styles/HomepageStyle";

function Homepage({ history, theme }) {
  const state = useContext(cards);
  const [searchCountry, handleChange] = useInput({
    // source: "",
    input: "",
    dropdown: "",
  });

  return (
    <StartPage theme={theme}>
      <UserInputFields theme={theme}>
        <SearchInput theme={theme}>
          <SearchIcon />
          <input
            placeholder="Search for a country..."
            type="text"
            name="input"
            value={searchCountry.input || ""}
            onChange={handleChange}
          />
        </SearchInput>
        <select
          name="dropdown"
          value={searchCountry.dropdown || ""}
          onChange={handleChange}
        >
          <option value="-1">Filter by Region</option>
          <option>Americas</option>
          <option>Africa</option>
          <option>Asia</option>
          <option>Europe </option>
          <option>Oceania</option>
        </select>
      </UserInputFields>

      <CardContainer>
        {state?.message ? (
          <h3>No Search Found...</h3>
        ) : (
          state.map((s) => (
            <CountryCard {...s} key={s.name} {...history} theme={theme} />
          ))
        )}
      </CardContainer>
    </StartPage>
  );
}

Homepage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Homepage;
