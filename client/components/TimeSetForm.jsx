import React from 'react';
import TimeMenu from './TimeMenu';

class TimeSetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <h6>What times would you like to calculate?</h6>
          <h6>From:</h6>
          <TimeMenu setTime={this.props.setTime} toOrFrom={'from'}/>
          <h6>To:</h6>
          <TimeMenu setTime={this.props.setTime} toOrFrom={'to'}/>
        <button onClick={(e) => this.props.calculateBellRings(e)}>Calculate Bell Rings!</button>
      </div>
    )
  }
}

export default TimeSetForm;
