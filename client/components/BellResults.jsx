import React from 'react';

class BellResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <p>Number of Intervening Bell Rings:</p>
        <p>{this.props.results}</p>
      </div>
    )
  }
}

export default BellResults;
