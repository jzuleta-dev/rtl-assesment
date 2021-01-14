import { createSlice } from "@reduxjs/toolkit";
import {
  getShowById,
  getShowEpisodesById,
  getShowAndEpisodesById,
} from "../services";

export const showSlice = createSlice({
  name: "show",
  initialState: {
    show: null,
    episodes: null,
    loading: false,
    error: false,
  },
  reducers: {
    getFullShow: (state, action) => ({
      ...state,
      loading: true,
    }),
    getFullShowSuccess: (state, action) => ({
      ...state,
      show: action.payload,
      episodes: action.payload._embedded.episodes,
      loading: false,
    }),
    getFullShowError: (state, action) => ({
      ...state,
      loading: false,
      error: true,
    }),
    getShow: (state, action) => ({
      ...state,
      loading: true,
    }),
    getShowSuccess: (state, action) => ({
      ...state,
      loading: false,
      show: action.payload,
    }),
    getShowError: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
    getEpisodes: (state, action) => ({
      ...state,
      loading: true,
    }),
    getEpisodesSuccess: (state, action) => ({
      ...state,
      loading: false,
      episodes: action.payload,
    }),
    getEpisodesError: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
    clearErrors: (state, action) => ({
      ...state,
      error: false,
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
  getFullShow,
  getFullShowSuccess,
  getFullShowError,
  clearErrors,
} = showSlice.actions;
export const selectors = {
  show: (state) => state.showReducer.show,
  episodes: (state) => state.showReducer.episodes,
  loading: (state) => state.showReducer.loading,
  error: (state) => state.showReducer.error,
  episodeById: (id) => (state) =>
    state.showReducer.episodes &&
    state.showReducer.episodes.filter(
      (episode) => episode.id === Number(id)
    )[0],
};

export const clearErrorFromState = () => (dispatch) => {
  dispatch(clearErrors());
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

export const fetchShowAndEpisodes = (id) => async (dispatch) => {
  dispatch(getFullShow());
  try {
    const showAndEpisodes = await getShowAndEpisodesById(id);
    console.log(showAndEpisodes);
    dispatch(getFullShowSuccess(showAndEpisodes));
  } catch (e) {
    dispatch(getFullShowError(e));
  }
};

export default showSlice.reducer;
