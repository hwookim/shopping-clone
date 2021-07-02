import React from "react";
import styled from "styled-components";
import { MAIN_CONTENTS } from "../constants/contents";

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  min-width: 1000px;
`;

const MainContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 420px 420px;
  margin: 10px 0;

  @media (max-width: 1240px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const MainContentItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
  background-color: white;
  font-size: 1.25rem;
  font-weight: bold;
`;

const MainContentLink = styled.a`
  display: block;
  margin-top: auto;
  font-size: 0.9rem;
  color: #007185;
  font-weight: normal;

  &:visited {
    color: #007185;
  }
  &:hover {
    color: #d2744d;
  }
`;

export default function Main() {
  return (
    <Container>
      <MainContentContainer>
        {MAIN_CONTENTS.map(({ title, linkText }) => (
          <MainContentItem key={title}>
            {title}
            <MainContentLink href="/">{linkText}</MainContentLink>
          </MainContentItem>
        ))}
      </MainContentContainer>
    </Container>
  );
}
