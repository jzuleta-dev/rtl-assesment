import { createSlice } from "@reduxjs/toolkit";
import { getShowById, getShowEpisodesById } from "../../services";
import { s } from "../../components/async/index.js";

export const showSlice = createSlice({
  name: "show",
  initialState: {
    show: null,
    episodes: null,
    episodesStatus: s.initial,
    showStatus: s.initial,
    error: false,
  },
  reducers: {
    getShow: (state, action) => ({
      ...state,
      showStatus: s.loading,
    }),
    getShowSuccess: (state, action) => ({
      ...state,
      showStatus: s.success,
      show: action.payload,
    }),
    getShowError: (state, action) => ({
      ...state,
      showStatus: s.error,
      error: action.payload,
    }),
    getEpisodes: (state, action) => ({
      ...state,
      episodesStatus: s.loading,
    }),
    getEpisodesSuccess: (state, action) => ({
      ...state,
      episodesStatus: s.success,
      episodes: action.payload,
    }),
    getEpisodesError: (state, action) => ({
      ...state,
      episodesStatus: s.error,
      error: action.payload,
    }),
  },
});

export const {
  getShow,
  getShowSuccess,
  getShowError,
  getEpisodes,
  getEpisodesSuccess,
  getEpisodesError,
} = showSlice.actions;
export const selectors = {
  show: (state) => state.showReducer.show,
  episodes: (state) => state.showReducer.episodes,
  loading: (state) => state.showReducer.loading,
  error: (state) => state.showReducer.error,
  showStatus: (state) => state.showReducer.showStatus,
  episodesStatus: (state) => state.showReducer.episodesStatus,
  episodeById: (id) => (state) =>
    state.showReducer.episodes &&
    state.showReducer.episodes.filter(
      (episode) => episode.id === Number(id)
    )[0],
};

export const fetchShow = (id) => async (dispatch) => {
  dispatch(getShow());
  try {
    const show = await getShowById(id);
    dispatch(getShowSuccess(show));
  } catch (e) {
    dispatch(getShowError(e));
  }
};

export const fetchEpisodes = (id) => async (dispatch) => {
  dispatch(getEpisodes());
  try {
    const episodes = await getShowEpisodesById(id);
    dispatch(getEpisodesSuccess(episodes));
  } catch (e) {
    dispatch(getEpisodesError(e));
  }
};

export default showSlice.reducer;
