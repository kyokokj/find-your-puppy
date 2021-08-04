import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import { Breeders } from "./containers/Breeders.jsx";
import { Dogs } from "./containers/Dogs.jsx";

function App() {
  return (
    <Router>
      {/* If there're header/footer, write here outside of switch */}
      <Switch>
        {/* Breeder index *write 'exact' to make it true since it's false as default */}
        <Route exact path="/breeders">
          <Breeders />
        </Route>
        <Route
          exact
          path="/breeders/:breedersId/dogs"
          render={({ match }) => <Dogs match={match} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
