import React, { Component } from 'react';
import styled from "styled-components";
import LandingPage from "./components/LandingPage";

const AppWrapper = styled.div``;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <LandingPage />
      </AppWrapper>
    );
  }
}

export default App;
