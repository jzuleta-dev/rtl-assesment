import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Async } from "../../components/async/index.js";
import { EpisodesList } from "../../components/episodes-list/index.js";
import { Show } from "../../components/show/index.js";
import { selectors, fetchShow, fetchEpisodes } from "./showSlide.js";
import { useLocation } from "wouter";
import styled from "styled-components";

const ShowDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const NavigationButtonsContainer = styled.div`
  height: 16px;
  margin-bottom: 20px;
  display: flex;
  height: 100%;
  justify-content: center;
`;

const Button = styled.button`
  background: white;
  border: 0.125em solid black;
  cursor: pointer;
  letter-spacing: 0.125em;
  margin: 0.5rem;
  padding: 0.5em 0.75em;
  text-transform: uppercase;
`;

export const ShowDetails = ({ params }) => {
  const { showId } = params;
  const [path, pushLocation] = useLocation();
  const [nextShow, setNextShow] = React.useState(0);
  const [prevShow, setPrevShow] = React.useState(0);
  const show = useSelector(selectors.show);
  const episodes = useSelector(selectors.episodes);
  const showState = useSelector(selectors.showStatus);
  const episodeState = useSelector(selectors.episodesStatus);
  const error = useSelector(selectors.error);
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetchShow(showId)(dispatch);
    fetchEpisodes(showId)(dispatch);
    setNextShow(Number(showId) + 1);
    setPrevShow(Number(showId) - 1);
  }, [showId, dispatch]);

  return (
    <ShowDetailContainer>
      <NavigationButtonsContainer>
        <Button onClick={() => pushLocation(`/shows/${prevShow}`)}>
          Previous
        </Button>
        <Button onClick={() => pushLocation(`/shows/${nextShow}`)}>Next</Button>
      </NavigationButtonsContainer>
      <Async state={showState} error={error}>
        {show ? <Show show={show} /> : "Loading was ok but sumthings fuccked"}
      </Async>

      <Async state={episodeState} error={error}>
        {episodes ? (
          <EpisodesList showId={showId} episodes={episodes} />
        ) : (
          "Loading was okay but something happened"
        )}
      </Async>
    </ShowDetailContainer>
  );
};
