import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

function App() {
  return (
    <Container className="App">
      <Header />
      <Footer />
    </Container>
  );
}

export default App;
