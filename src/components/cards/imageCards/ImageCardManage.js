import React, { Component } from 'react';

class ImageCardManage extends Component {
  constructor(props) {
    super(props);

    this.renderManageCardForm = this.renderManageCardForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();

    const updatedImageCard = {
      title: this.title.value,
      subtitle: this.subtitle.value,
      body: this.body.value,
      image: {
        src: this.imageSrc.value,
        alt: this.imageAlt.value
      }
    }

    this.props.updateImageCard(updatedImageCard);
    this.manageCardForm.reset();
  }
  renderManageCardForm() {
    if(Object.keys(this.props.content).length !== 0) {
      return (
        <form ref={ (input) => this.manageCardForm = input } onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title" className="c-label">Title</label>
            <input id="title" className="c-input" defaultValue={this.props.content.title} type="text" ref={ (input) => this.title = input } />
            <span className="c-input__border"></span>
          </div>
          <div>
            <label htmlFor="subtitle" className="c-label">Subtitle</label>
            <input id="subtitle" className="c-input" defaultValue={this.props.content.subtitle} type="text" ref={ (input) => this.subtitle = input } />
            <span className="c-input__border"></span>
          </div>
          <div>
            <label htmlFor="body" className="c-label">Body</label>
            <textarea id="body" className="c-textarea" defaultValue={this.props.content.body} ref={ (input) => this.body = input } />
            <span className="c-textarea__border"></span>
          </div>
          <div>
            <label htmlFor="imageSrc" className="c-label">Image source</label>
            <input id="imageSrc" className="c-input" defaultValue={this.props.content.image.src} type="url" ref={ (input => this.imageSrc = input) } />
            <span className="c-input__border"></span>
          </div>
          <div>
            <label htmlFor="imageAlt" className="c-label">Image alt tag</label>
            <input id="imageAlt" className="c-input" defaultValue={this.props.content.image.alt} type="text" ref={ (input => this.imageAlt = input) } />
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
          { this.renderManageCardForm() }
        </div>
      </div>
    )
  }
}

export default ImageCardManage;
