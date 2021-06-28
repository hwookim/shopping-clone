import React from "react";
import styled from "styled-components";

import FooterNav from "./FooterNav";

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  color: white;
`;

const BackToTop = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0;
  background-color: #37475a;
`;

export default function Footer() {
  return (
    <Container>
      <BackToTop>위로 돌아가기</BackToTop>
      <FooterNav />
    </Container>
  );
}
