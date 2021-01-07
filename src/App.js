import "./App.css";
import styled from "styled-components";
import { Route } from "wouter";
import { Container } from "./containers/container";
import { ShowDetails } from "./containers/show-details";
import { EpisodeDetails } from "./containers/episode-details";
import { NotFoun404 } from "./containers/not-found";
const AppContainer = styled.div`
  width: 100%;
  max-width: 700px;
  height: 100%;
  padding: 8px;

  @media only screen and (min-width: 768px) {
    padding: 32px;
    margin: 0 auto;
  }
`;
function App() {
  return (
    <AppContainer>
      <Route path="/" component={Container} />
      <Route path="/404" component={NotFoun404} />
      <Route path="/shows/:showId" component={ShowDetails} />
      <Route
        path="/shows/:showId/episodes/:episodeId"
        component={EpisodeDetails}
      />
    </AppContainer>
  );
}
export default App;
