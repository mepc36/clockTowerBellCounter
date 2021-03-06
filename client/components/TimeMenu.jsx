import React from 'react';

class TimeMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const hourOptions = [];
    const minuteOptions = [];

    for (let i = 1; i <= 24; i++) {
      hourOptions.push(<option value={i} key={i}>{i}</option>);
    }
    for (let j = 0; j <= 59; j++) {
      if (j < 10) {
        minuteOptions.push(<option value={j} key={j}>:0{j}</option>);
      } else {
        minuteOptions.push(<option value={j} key={j}>:{j}</option>);
      }
    }
  
    return (
      <div>
        <form onChange={(e) => this.props.setTimeHour(e, this.props.toOrFrom)}>
          <select>
            <option value="null">Pick an hour:</option>
            {hourOptions}
          </select>
        </form>
        <form onChange={(e) => this.props.setTimeMinute(e, this.props.toOrFrom)}>
          <select>
            <option value="null">Pick a minute:</option>
            {minuteOptions}
          </select>
        </form>
      </div>
    )
  }
}

export default TimeMenu;
