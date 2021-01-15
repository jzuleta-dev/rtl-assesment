import "./App.css";
import styled from "styled-components";
import { Route } from "wouter";
import { Container } from "containers/container";
import { ShowDetails } from "containers/show-details";
import { EpisodeDetails } from "containers/episode-details";
import { NotFound404 } from "containers/not-found";
import { ErrorBounderies } from "containers/error-bounderies";
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

//TODO create error bounderies component to catch the error.
function App() {
  return (
    <AppContainer>
      <ErrorBounderies>
        <Route path="/" component={Container} />
        <Route path="/404" component={NotFound404} />
        <Route path="/shows/:showId" component={ShowDetails} />
        <Route
          path="/shows/:showId/episodes/:episodeId"
          component={EpisodeDetails}
        />
      </ErrorBounderies>
    </AppContainer>
  );
}
export default App;
