import React, { Component } from 'react';

class ContentCardEdit extends Component {
  render() {
    return (
      <pre>
        { JSON.stringify(this.props, null, 2)}
      </pre>
    )
  }
}

export default ContentCardEdit;
