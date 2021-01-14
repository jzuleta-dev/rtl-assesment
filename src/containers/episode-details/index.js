import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Episode } from "../../components/episode";
import { selectors, fetchEpisodes } from "../../slides/showSlide";

export const EpisodeDetails = ({ params }) => {
  const { showId, episodeId } = params;
  const dispatch = useDispatch();
  const episode = useSelector(selectors.episodeById(episodeId));
  React.useEffect(() => {
    const fetchAsyncEpisodes = async () => {
      await fetchEpisodes(showId)(dispatch);
    };
    fetchAsyncEpisodes();
  }, [showId, dispatch]);
  return <div>{episode ? <Episode episode={episode} /> : null}</div>;
};
