import React, { Component } from 'react';

class IframeManage extends Component {
  constructor(props) {
    super(props);

    this.renderIframeForm = this.renderIframeForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();

    const updatedIframe = {
      id: this.props.content.id,
      src: this.src.value,
      size: this.size.value
    }

    this.props.updateIframe(updatedIframe);
    this.manageIframeForm.reset();
  }
  renderIframeForm() {
    if(Object.keys(this.props.content).length !== 0) {
      return (
        <form ref={ (input) => this.manageIframeForm = input } onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="src" className="c-label">Iframe source</label>
            <input id="src" className="c-input" defaultValue={this.props.content.src} type="text" ref={ (input) => this.src = input } />
            <span className="c-input__border"></span>
          </div>
          <div>
            <label htmlFor="size" className="c-label">Size</label>
            <input id="size" className="c-input" defaultValue={this.props.content.size} type="text" ref={ (input) => this.size = input } />
            <span className="c-input__border"></span>
          </div>
          <button className="c-btn-primary" type="submit">Update</button>
        </form>
      )
    }
    return null;
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
          { this.renderIframeForm() }
        </div>
      </div>
    )
  }
}

export default IframeManage;
