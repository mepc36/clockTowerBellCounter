import React from 'react';

class TimeMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const options = [];

    for (let i = 1; i <= 24; i++) {
      for (let j = 0; j <= 59; j++) {
        options.push(<option value={i}>{i}:{j}</option>);
      }
    }
  
    return (
      <div>
        <form onChange={(e) => this.props.setTime(e, this.props.toOrFrom)}>
        <select>
          <option>Pick a time:</option>
          {options}
        </select>
        </form>
      </div>
    )
  }
}

export default TimeMenu;
