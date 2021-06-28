import React from "react";
import styled from "styled-components";

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

const NavItem = styled.div`
  display: flex;
  align-items: center;
  margin: auto 5px;
  padding: 0 5px;
  height: 30px;

  &:hover {
    margin: auto 4px;
    border: 1px solid white;
    cursor: pointer;
  }
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
        <NavItem>오늘의 딜</NavItem>
        <NavItem>고객 서비스</NavItem>
        <NavItem>기프트 카드</NavItem>
        <NavItem>레지스트리</NavItem>
      </NavCenter>
      <NavSide>
        <NavItem style={{ fontWeight: "bold" }}>
          Click here to shop in English
        </NavItem>
      </NavSide>
    </Container>
  );
}
