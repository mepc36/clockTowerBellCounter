import React from 'react';

class BellResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div>Results: {this.props.results}</div>
    )
  }
}

export default BellResults;
