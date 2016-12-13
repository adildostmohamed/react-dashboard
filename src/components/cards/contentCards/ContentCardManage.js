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
            <input id="action1Label" className="c-input" defaultValue={this.props.content.actions[0].label} type="text" ref={ (input => this.action1Label = input) } />
            <span className="c-input__border"></span>
          </div>
          <div>
            <label htmlFor="action1Target" className="c-label">Action 1 Target</label>
            <input id="action1Target" className="c-input" defaultValue={this.props.content.actions[0].target} type="url" ref={ (input => this.action1Target = input) } />
            <span className="c-input__border"></span>
          </div>
          {/* <label htmlFor="action2Label">Action 2 Label</label>
          <input id="action2Label" defaultValue={this.props.content.actions[1].label} type="text" ref={ (input => this.action2Label = input) } />
          <label htmlFor="action2Target">Action 2 Target</label>
          <input id="action2Target" defaultValue={this.props.content.actions[1].target} type="url" ref={ (input => this.action2Target = input) } /> */}
          <button type="submit">Update</button>
        </form>
      )
    }
    return null;
  }
  render() {
    return (
      <div className="container">
        { this.renderManageCardForm() }
      </div>
    )
  }
}

export default ContentCardManage;
