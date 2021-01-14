import React from "react";
import { selectors } from "../../slides/showSlide";
import { useSelector } from "react-redux";
import { NotFound404 } from "../not-found";
export const ErrorBounderies = ({ children }) => {
  const error = useSelector(selectors.error);

  return error ? <NotFound404 /> : children;
};
