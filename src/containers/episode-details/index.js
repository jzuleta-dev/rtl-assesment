import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Async } from "../../components/async";
import { Episode } from "../../components/episode";
import { selectors, fetchEpisodes } from "../show-details/showSlide";

export const EpisodeDetails = ({ params }) => {
  const { showId, episodeId } = params;
  const dispatch = useDispatch();
  const error = useSelector(selectors.error);
  const episode = useSelector(selectors.episodeById(episodeId));
  const episodeState = useSelector(selectors.episodesStatus);
  return (
    <div>
      <Async
        state={episodeState}
        error={error}
        fetchFunction={() => fetchEpisodes(showId)(dispatch)}
      >
        {episode ? <Episode episode={episode} /> : null}
      </Async>
    </div>
  );
};
