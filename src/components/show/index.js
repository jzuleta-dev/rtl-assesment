import styled from "styled-components";

const ShowContainer = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 500px;
  box-sizing: border-box;

  @media only screen and (min-width: 768px) {
    height: 100%;
  }
`;

const Image = styled.img`
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const ShowTitle = styled.h2`
  margin-bottom: 0px;

  @media only screen and (min-width: 768px) {
    margin-top: 0px;
  }
`;
const Genre = styled.h4`
  margin-top: 0px;
  font-weight: 400;
`;

const Subtitle = styled.h5`
  margin-bottom: 0;
`;

const SummaryParagraph = styled.p`
  font-size: 16px;
  color: #474747;
  margin-top: 0;
`;

const ShowInformation = styled.div`
  @media only screen and (min-width: 768px) {
    margin-left: 32px;
  }
`;

export const Show = ({ show }) => {
  return (
    <ShowContainer>
      <ImageContainer>
        <Image src={show.image.medium} alt="" />
      </ImageContainer>
      <ShowInformation>
        <ShowTitle>{show.name}</ShowTitle>
        <Genre>{show.type}</Genre>
        <Subtitle>Summary</Subtitle>
        <SummaryParagraph
          dangerouslySetInnerHTML={{ __html: show.summary }}
        ></SummaryParagraph>
      </ShowInformation>
    </ShowContainer>
  );
};
