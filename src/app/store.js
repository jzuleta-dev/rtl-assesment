import { configureStore } from "@reduxjs/toolkit";
import showReducer from "../containers/show-details/showSlide";

export default configureStore({
  reducer: {
    showReducer,
  },
});
