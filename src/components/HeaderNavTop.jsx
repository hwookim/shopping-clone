import React from "react";
import styled from "styled-components";

import Flag from "../assets/Flag_of_South_Korea.svg";

const Container = styled.nav`
  display: flex;
  padding: 0 5px;
  height: 60px;
  align-items: center;
  background-color: #131921;
`;

const NavSide = styled.div`
  display: flex;
  flex: 0;
  justify-content: center;
`;

const NavCenter = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  margin: auto 5px;
  padding: 0 5px;
  height: 45px;

  &:hover {
    margin: auto 4px;
    border: 1px solid white;
    cursor: pointer;
  }
`;

const SupText = styled.div`
  height: 14px;
  font-size: 0.85em;
  color: #ccc;
`;

const NavText = styled.div`
  height: 15px;
  font-weight: bold;
`;

const Logo = styled.div`
  display: flex;
  width: 113px;
  height: 50px;
  justify-content: center;
  align-items: center;
  font-size: 32px;
`;

const SearchInput = styled.input`
  margin: 0 15px;
  width: 100%;
  min-width: 500px;
  height: 30px;
`;

export default function HeaderNavTop() {
  return (
    <Container>
      <NavSide>
        <Logo>LOGO</Logo>
        <NavItem>
          <span className="material-icons-outlined">location_on</span>
          <div>
            <SupText>배송처</SupText>
            <NavText>대한민국</NavText>
          </div>
        </NavItem>
      </NavSide>
      <NavCenter>
        <SearchInput type="text" />
      </NavCenter>
      <NavSide>
        <NavItem>
          <img src={Flag} alt="대한민국" style={{ width: "30px" }} />
        </NavItem>
        <NavItem>
          <div>
            <SupText>안녕하세요, 로그인</SupText>
            <NavText>계정 및 목록</NavText>
          </div>
        </NavItem>
        <NavItem>
          <div>
            <SupText>반품</SupText>
            <NavText>& 주문</NavText>
          </div>
        </NavItem>
        <NavItem>
          <span
            className="material-icons-outlined"
            style={{ fontSize: "35px" }}
          >
            shopping_cart
          </span>
          <div>
            <SupText />
            <NavText>장바구니</NavText>
          </div>
        </NavItem>
      </NavSide>
    </Container>
  );
}
