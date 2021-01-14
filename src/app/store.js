import { configureStore } from "@reduxjs/toolkit";
import showReducer from "../slides/showSlide";

export default configureStore({
  reducer: {
    showReducer,
  },
});
