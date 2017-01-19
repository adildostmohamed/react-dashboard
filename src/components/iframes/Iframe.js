import React, { Component } from 'react';
import classNames from 'classnames';

export default class Iframe extends Component {
  constructor(props) {
    super(props);

    this.renderIframe = this.renderIframe.bind(this);
    this.renderIframeTitle = this.renderIframeTitle.bind(this);
  }

  renderIframe() {
    if(this.props.content && this.props.content.hasOwnProperty("src")) {
      return (
        <iframe className="m-iframe" src={this.props.content.src}  width="100%" height="556px" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
      )
    }

    return null;
  }

  renderIframeTitle() {
    if(this.props.content && this.props.content.hasOwnProperty("title")) {
      return (
        <div className="m-iframe__title-wrapper">
          <h3 className="m-iframe__title">{ this.props.content.title }</h3>
        </div>
      )
    }
    return null;
  }

  render() {
    const iframeClassNames = classNames('m-iframe__wrapper', {
      'col-sm-3': this.props.content.hasOwnProperty("size") && this.props.content.size === "Small",
      'col-sm-6 col-md-8': this.props.content.hasOwnProperty("size") && this.props.content.size === "Medium",
      'col-sm-12': this.props.content.hasOwnProperty("size") && this.props.content.size === "Large"
    });

    return (
      <div className={iframeClassNames}>
        { this.renderIframeTitle() }
        { this.renderIframe() }
      </div>
    )
  }
}
