import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  text-align: center;
  font-size: 34px;
  margin: 0 auto;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Container>
        <h1>Clock Tower Bell Counter:</h1>
      </Container>
    )
  }
}

export default App;
