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
    var numeralizedValue = parseInt(e.target.value);

    if (numeralizedValue > 12) {
      numeralizedValue -= 12;
    }

    if (toOrFrom === 'from') {
      this.setState({
        fromTimeHour: numeralizedValue,
      });
    } else {
      this.setState({
        toTimeHour: numeralizedValue,
      });
    }
  }

  setTimeMinute(e, toOrFrom) {
    e.preventDefault();
    var numeralizedValue = parseInt(e.target.value);

    if (numeralizedValue > 12) {
      numeralizedValue -= 12;
    }
  
    if (toOrFrom === 'from') {
      this.setState({
        fromTimeMinute: numeralizedValue
      });
    } else {
      this.setState({
        toTimeMinute: numeralizedValue
      });
    }
  }

  calculateBellRings() {
    var newResults = 0;
    var i = this.state.fromTimeHour;

    if (this.state.fromTimeHour === null || this.state.fromTimeMinute === null || this.state.toTimeHour === null || this.state.toTimeMinute === null) {
      window.alert('You must select two times before the number of bell rings can be calculated!')
    } else if (this.state.fromTimeHour === this.state.toTimeHour && this.state.fromTimeMinute === this.state.toTimeMinute) {
      this.setState({
        results: 24,
      })
    } else {
      while (i <= this.state.toTimeHour) {
        newResults += this.state.fromTimeHour;
        this.state.fromTimeHour += 1;
        i++;
      }
      this.setState({
        results: newResults,
      })
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
