import React from "react";
import styled from "styled-components";

import Flag from "../assets/Flag_of_South_Korea.svg";
import HeaderLink from "./HeaderLink";
import SearchBar from "./SearchBar";

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

const NavItem = styled(HeaderLink)`
  height: 45px;
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

export default function HeaderNavTop() {
  return (
    <Container>
      <NavSide>
        <Logo>LOGO</Logo>
        <NavItem href="/">
          <span className="material-icons-outlined">location_on</span>
          <div>
            <SupText>배송처</SupText>
            <NavText>대한민국</NavText>
          </div>
        </NavItem>
      </NavSide>
      <NavCenter>
        <SearchBar />
      </NavCenter>
      <NavSide>
        <NavItem href="/">
          <img src={Flag} alt="대한민국" style={{ width: "30px" }} />
        </NavItem>
        <NavItem href="/">
          <div>
            <SupText>안녕하세요, 로그인</SupText>
            <NavText>계정 및 목록</NavText>
          </div>
        </NavItem>
        <NavItem href="/">
          <div>
            <SupText>반품</SupText>
            <NavText>& 주문</NavText>
          </div>
        </NavItem>
        <NavItem href="/">
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
