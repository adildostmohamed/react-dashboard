import React, { Component } from 'react';

export default class ContentCard extends Component {
  render() {
    return (
      <div>
        I am a content card component called
        <pre>
          { JSON.stringify(this.props, null, 2) }
        </pre>
      </div>
    )
  }
}
