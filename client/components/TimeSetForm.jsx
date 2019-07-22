import React from 'react';
import TimeMenu from './TimeMenu';

const TimeSetForm = props => (
  <div>
    <h6>What times would you like to calculate?</h6>
      <h6>From time...</h6>
      <TimeMenu setTimeHour={props.setTimeHour} setTimeMinute={props.setTimeMinute} toOrFrom={'from'}/>
      <h6>...to time:</h6>
      <TimeMenu setTimeHour={props.setTimeHour} setTimeMinute={props.setTimeMinute} toOrFrom={'to'}/>
    <button onClick={(e) => props.calculateBellRings(e)}>Calculate Bell Rings!</button>
    <br />
  </div>
)

export default TimeSetForm;
