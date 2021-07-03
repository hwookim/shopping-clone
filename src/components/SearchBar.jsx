import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  width: 98%;
`;

const SearchSide = styled.div`
  display: flex;
  flex: 0;
  justify-content: center;
  align-items: center;
`;

const SearchCenter = styled.div`
  display: flex;
  flex: 1;
  min-width: 400px;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const SearchDropBox = styled.div`
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 55px;
  font-size: 0.75rem;
  background-color: #f3f3f3;
  border: 1px solid #555555;
  border-radius: 5px 0 0 5px;
  color: #555555;
`;

const SearchInput = styled.input`
  height: 90%;
  width: 99%;
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`;

const SearchBtn = styled.button`
  margin: 0;
  height: 100%;
  width: 45px;
  border: none;
  background-color: #febd69;
  border-radius: 0 5px 5px 0;
`;

export default function SearchBar() {
  return (
    <Container>
      <SearchSide>
        <SearchDropBox>모두 ▼</SearchDropBox>
      </SearchSide>
      <SearchCenter>
        <SearchInput type="text" />
      </SearchCenter>
      <SearchSide>
        <SearchBtn>
          <span className="material-icons">search</span>
        </SearchBtn>
      </SearchSide>
    </Container>
  );
}
