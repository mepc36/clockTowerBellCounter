import React from 'react';
import styled from 'styled-components';
import TimeSetForm from './components/TimeSetForm';
import BellResults from './components/BellResults';

const Container = styled.section`
  text-align: center;
  font-size: 28px;
  margin: 0 auto;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromTime: null,
      toTime: null,
      results: 0,
    }
  }

  setTime(e, toOrFrom) {
    e.preventDefault();
    if (toOrFrom === 'from') {
      this.setState({
        fromTime: parseInt(e.target.value)
      })
    } else {
      this.setState({
        toTime: parseInt(e.target.value)
      })
    }
  }

  calculateBellRings() {
    if (!this.state.fromTime || !this.state.toTime) {
      console.log('You must select two times, before the number of bell rings can be calculated!')
    } else {
      console.log('Calculating bell rings!');

    }
  }

  render() {
    return (
      <Container>
        <h1>Clock Tower Bell Counter!</h1>
        <TimeSetForm calculateBellRings={this.calculateBellRings.bind(this)} setTime={this.setTime.bind(this)}/>
        <BellResults results={this.state.results}/>
      </Container>
    )
  }
}

export default App;
