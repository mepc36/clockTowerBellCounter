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
    var fromTimeHour = this.state.fromTimeHour;
    var fromTimeMinute = this.state.fromTimeMinute;
    var toTimeHour = this.state.toTimeHour;
    var toTimeMinute = this.state.toTimeMinute;

    if (!this.areTimesValid()) {
      window.alert('You must select two times before the number of bell rings can be calculated!');
      return;
    } 
    if (fromTimeHour === toTimeHour) {
      newResults = 24;
    }
    else {
      if (this.state.fromTimeMinute === 0) {
        while (fromTimeHour <= toTimeHour) {
          newResults += fromTimeHour
          fromTimeHour++;
        }
      } else {
        if (fromTimeHour + 1 === toTimeHour) {
          newResults = toTimeHour;
        } else {
          fromTimeHour += 1;
          while (fromTimeHour <= toTimeHour) {
            newResults += fromTimeHour
            fromTimeHour++;
          }
        }
      }
    }
    this.setState({
      results: newResults,
    })
  }

  areTimesValid() {
    if (this.state.fromTimeHour !== null && this.state.fromTimeMinute !== null && this.state.toTimeHour !== null && this.state.toTimeMinute !== null) {
      return true;
    } else {
      return false;
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
