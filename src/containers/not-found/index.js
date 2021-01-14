import styled from "styled-components";
import errorLogo from "../../error.jpeg";
import { useLocation } from "wouter";
import { useDispatch } from "react-redux";
import { clearErrorFromState } from "../../slides/showSlide";
const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  margin-bottom: 200px;
`;

const Button = styled.button`
  background: white;
  border: 0.125em solid black;
  cursor: pointer;
  letter-spacing: 0.125em;
  margin: 0.5rem;
  padding: 0.5em 0.75em;
  text-transform: uppercase;
`;
export const NotFound404 = () => {
  const [path, pushLocation] = useLocation();

  const dispatch = useDispatch();

  function returnToLandingPage() {
    clearErrorFromState()(dispatch);
    pushLocation("/");
  }

  return (
    <ErrorPageContainer>
      <Image src={errorLogo} className="App-logo" alt="logo" loading="lazy" />
      <p>Oops that show doesn't exists</p>
      <Button onClick={returnToLandingPage}>Go to the landing page</Button>
    </ErrorPageContainer>
  );
};
