import React, { Component } from 'react';

export default class ImageCard extends Component {
  render() {
    return (
      <div>
        I am an image card component called
        <pre>
          { JSON.stringify(this.props, null, 2) }
        </pre>
      </div>
    )
  }
}
