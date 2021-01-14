import { useLocation } from "wouter";
export const s = {
  initial: "INITIAL",
  loading: "LOADING",
  error: "ERROR",
  success: "SUCCESS",
};

export const Async = ({ children, state, error }) => {
  const location = useLocation();

  switch (state) {
    case s.initial:
      return "loading";
    case s.loading:
      return "loading";
    case s.error:
      location.pushLocation("/404");
      return null;
    case s.success:
      return children;
    default:
      return "Something horrible just happened";
  }
};
