import React from "react";
import { useLocation } from "wouter";
import styled from "styled-components";

const DEFAULT_ROUTE = "/shows/1955";

const LandingContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const InputContainer = styled.div``;

const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  font-size: 16px;
`;
export const Container = () => {
  const location = useLocation();
  const [search, setSearch] = React.useState("");
  const handleQueryChange = (evt) => {
    setSearch(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    search === ""
      ? location.pushLocation(DEFAULT_ROUTE)
      : location.pushLocation(`/shows/${search}`);
  };

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 32) {
        location.pushLocation(DEFAULT_ROUTE);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // cleanup this component
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [location]);
  return (
    <LandingContainer>
      <p>
        If you know the Show id please enter it, otherwise just press your Space
        bar 🚀!
      </p>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            onChange={handleQueryChange}
            value={search}
            placeholder={"Search by id..."}
          />
        </InputContainer>
      </form>
    </LandingContainer>
  );
};
