import React from "react";
import styled from "styled-components";

import NavTop from "./NavTop";
import NavBottom from "./NavBottom";

const Container = styled.header`
  display: flex;
  flex-direction: column;
  color: white;
  white-space: nowrap;
  font-size: 14px;
`;

export default function Header() {
  return (
    <Container>
      <NavTop />
      <NavBottom />
    </Container>
  );
}
