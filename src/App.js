import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/Theme";
import { GlobalStyles } from "./styles/globalStyles";

import { useDarkMode } from "./customhook/useDarkMode";
import { Country } from "./contexts/state.context";
import Header from "./components/Header";

const Homepage = React.lazy(() => import("./components/Homepage"));
const CountryDetails = React.lazy(() => import("./components/CountryDetails"));

function App() {
  const [theme, toggleTheme] = useDarkMode("light");

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <div className="App">
      <ThemeProvider theme={themeMode}>
        <>
          <Suspense
            fallback={<h2 style={{ textAlign: "center" }}>Loading...</h2>}
          >
            <GlobalStyles />
            <Header theme={theme} toggleTheme={toggleTheme} />
            <Country>
              <Switch>
                <Route
                  path="/detail/:id"
                  exact
                  render={(routeProps) => (
                    <CountryDetails {...routeProps} theme={theme} />
                  )}
                />
                <Route
                  path="/"
                  render={(props) => <Homepage {...props} theme={theme} />}
                />
              </Switch>
            </Country>
          </Suspense>
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
