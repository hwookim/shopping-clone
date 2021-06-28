import React from "react";
import styled from "styled-components";

import NavTop from "./NavTop";

const Container = styled.header`
  display: flex;
  flex-direction: row;
  color: white;
  white-space: nowrap;
  font-size: 14px;
`;

export default function Header() {
  return (
    <Container>
      <NavTop />
    </Container>
  );
}
