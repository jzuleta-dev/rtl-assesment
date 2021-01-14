import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { EpisodesList } from "../../components/episodes-list/index.js";
import { Show } from "../../components/show/index.js";
import { selectors, fetchShowAndEpisodes } from "../../slides/showSlide";
import { useLocation } from "wouter";
import styled from "styled-components";
import Spinner from "../../components/Spinner/index.js";

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
  const loading = useSelector(selectors.loading);
  const episodes = useSelector(selectors.episodes);
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetchShowAndEpisodes(showId)(dispatch);
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
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          {show && <Show show={show} />}
          {episodes && <EpisodesList showId={showId} episodes={episodes} />}
        </React.Fragment>
      )}
    </ShowDetailContainer>
  );
};
