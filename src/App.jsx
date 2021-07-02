import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  background-color: #eaeded;
`;

function App() {
  return (
    <Container className="App">
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default App;
