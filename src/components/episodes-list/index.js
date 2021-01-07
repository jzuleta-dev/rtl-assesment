import React from "react";
import styled from "styled-components";
import { Link } from "wouter";

const EpisodeItem = styled(Link)`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Subtitle = styled.h5`
  margin-bottom: 0;
`;

export const EpisodesList = ({ showId, episodes }) => {
  return (
    <div>
      <Subtitle>Episodes</Subtitle>
      <ul>
        {episodes.map((episode, key) => (
          <li key={key}>
            <EpisodeItem
              key={key}
              href={`/shows/${showId}/episodes/${episode.id}`}
            >
              {episode.name}
            </EpisodeItem>
          </li>
        ))}
      </ul>
    </div>
  );
};
