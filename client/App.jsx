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
      fromTimeHour: null,
      fromTimeMinute: null,
      toTimeHour: null,
      toTimeMinute: null,
      results: 0,
    }
  }

  setTimeHour(e, toOrFrom) {
    e.preventDefault();
    if (toOrFrom === 'from') {
      this.setState({
        fromTimeHour: parseInt(e.target.value)
      });
    } else {
      this.setState({
        toTimeHour: parseInt(e.target.value)
      });
    }
  }

  setTimeMinute(e, toOrFrom) {
    e.preventDefault();
    if (toOrFrom === 'from') {
      this.setState({
        fromTimeMinute: parseInt(e.target.value)
      });
    } else {
      this.setState({
        toTimeMinute: parseInt(e.target.value)
      });
    }
  }

  calculateBellRings() {
    if (!this.state.fromTimeHour || !this.state.fromTimeMinute || !this.state.toTimeHour || !this.state.toTimeMinute) {
      console.log('You must select two times, before the number of bell rings can be calculated!')
    } else {
      console.log('Calculating bell rings!');

    }
  }

  render() {
    return (
      <Container>
        <h1>Clock Tower Bell Counter!</h1>
        <TimeSetForm calculateBellRings={this.calculateBellRings.bind(this)} setTimeHour={this.setTimeHour.bind(this)} setTimeMinute={this.setTimeMinute.bind(this)}/>
        <BellResults results={this.state.results}/>
      </Container>
    )
  }
}

export default App;
