import React from "react";
import styled from "styled-components";
import HeaderLink from "./HeaderLink";

const Container = styled.nav`
  display: flex;
  padding: 0 5px;
  height: 40px;
  background-color: #232f3e;
`;

const NavSide = styled.div`
  display: flex;
  flex: 0;
  justify-content: center;
`;

const NavCenter = styled.div`
  display: flex;
  flex: 1;
  min-width: 700px;
`;

const NavItem = styled(HeaderLink)`
  height: 30px;
`;

export default function HeaderNavBottom() {
  return (
    <Container>
      <NavSide>
        <NavItem>
          <span className="material-icons-outlined">menu</span>
          모두
        </NavItem>
      </NavSide>
      <NavCenter>
        <NavItem href="/">오늘의 딜</NavItem>
        <NavItem href="/">고객 서비스</NavItem>
        <NavItem href="/">기프트 카드</NavItem>
        <NavItem href="/">레지스트리</NavItem>
      </NavCenter>
      <NavSide>
        <NavItem href="/" style={{ fontWeight: "bold" }}>
          Click here to shop in English
        </NavItem>
      </NavSide>
    </Container>
  );
}
