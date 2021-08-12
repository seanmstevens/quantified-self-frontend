import "bootswatch/dist/zephyr/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import Header from './Header';
import Summaries from "./Summaries";
import Activities from "./Activities";
import Places from "./Places";
import Navigation from "./Navigation";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Row>
          <Navigation />
        </Row>
        <Row>
          <Switch>
            <Route exact path="/">
              <Redirect to="/summaries" />
            </Route>
            <Route path="/summaries">
              <Summaries />
            </Route>
            <Route path="/activities">
              <Activities />
            </Route>
            <Route path="/places">
              <Places />
            </Route>
          </Switch>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
