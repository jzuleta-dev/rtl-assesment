const API_URL = "https://api.tvmaze.com";

const fromApiResponseToShow = (apiResponse) => (apiResponse ? apiResponse : []);

export const getShowById = (id) =>
  fetch(`${API_URL}/shows/${id}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject();
      }
    })
    .then(fromApiResponseToShow);

export const getShowEpisodesById = (id) =>
  fetch(`${API_URL}/shows/${id}/episodes`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject();
      }
    })
    .then(fromApiResponseToShow);

export const getShowAndEpisodesById = (id) =>
  fetch(`${API_URL}/shows/${id}?embed=episodes`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject();
      }
    })
    .then(fromApiResponseToShow);
