import React from "react";
import styled from "styled-components";

import HeaderNavTop from "./HeaderNavTop";
import HeaderNavBottom from "./HeaderNavBottom";

const Container = styled.header`
  display: flex;
  flex-direction: column;
  color: white;
  white-space: nowrap;
`;

export default function Header() {
  return (
    <Container>
      <HeaderNavTop />
      <HeaderNavBottom />
    </Container>
  );
}
