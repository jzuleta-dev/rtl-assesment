import React from "react";
import styled from "styled-components";

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
`;

const EpisodeTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 32px;
`;
const SummaryParagraph = styled.p`
  margin-top: 8px;
  font-size: 16px;
  color: #474747;
  margin-top: 0;
`;

const Subtitle = styled.h5`
  margin-bottom: 0;
`;

export const Episode = ({ episode }) => (
  <div>
    <EpisodeTitle>{episode.name}</EpisodeTitle>
    <ImageContainer>
      <Image src={episode.image.original} alt="" />
    </ImageContainer>
    <Subtitle>Summary</Subtitle>
    <SummaryParagraph
      dangerouslySetInnerHTML={{ __html: episode.summary }}
    ></SummaryParagraph>
  </div>
);
