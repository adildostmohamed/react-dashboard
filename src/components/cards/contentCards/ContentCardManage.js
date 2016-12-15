import React, { Component } from 'react';

class ContentCardManage extends Component {
  constructor(props) {
    super(props);

    this.renderManageCardForm = this.renderManageCardForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();

    const updatedContentCard = {
      id: this.props.content.id,
      title: this.title.value,
      subtitle: this.subtitle.value,
      body: this.body.value,
      actions: [
        { label: this.action1Label.value, target: this.action1Target.value }
      ]
    }

    this.props.updateContentCard(updatedContentCard);
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
            <label htmlFor="action1Label" className="c-label">Action 1 Label</label>
            <input id="action1Label" className="c-input" defaultValue={this.props.content.actions && this.props.content.actions[0].hasOwnProperty("label") ? this.props.content.actions[0].label : null} type="text" ref={ (input => this.action1Label = input) } />
            <span className="c-input__border"></span>
          </div>
          <div>
            <label htmlFor="action1Target" className="c-label">Action 1 Target</label>
            <input id="action1Target" className="c-input" defaultValue={this.props.content.actions && this.props.content.actions[0].hasOwnProperty("target") ? this.props.content.actions[0].target : null} type="url" ref={ (input => this.action1Target = input) } />
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

export default ContentCardManage;
