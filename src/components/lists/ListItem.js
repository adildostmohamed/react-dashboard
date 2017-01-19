import React, { Component } from 'react';

export default class ListItem extends Component {
  constructor(props) {
    super(props);

    this.renderListItemName = this.renderListItemName.bind(this);
    this.renderListItemBody = this.renderListItemBody.bind(this);
    this.renderListItem = this.renderListItem.bind(this);
    this.renderListItemImage = this.renderListItemImage.bind(this);
    this.handleListItemClick = this.handleListItemClick.bind(this);
  }

  //a helper function to check if the list item was passed in a function to run when clicked as a a prop, if so it will call that function and pass back the item to the function
  handleListItemClick(event) {
    if(this.props.hasOwnProperty("handleClick")){
      this.props.handleClick(event, this.props.item);

    };
  }

  renderListItemName() {
    if(this.props.item && this.props.item.hasOwnProperty("title")){
      return (
        <p className="m-list-item__title">{this.props.item.title}</p>
      )
    };
    return null;
  }
  renderListItemBody() {
    if(this.props.item && this.props.item.hasOwnProperty("body")){
      return (
        <p className="m-list-item__body">{this.props.item.body}</p>
      )
    };
    return null;
  }
  renderListItemImage() {
    if(this.props.item && this.props.item.hasOwnProperty("image")) {
      return (
        <img className="m-list-item__image" src={this.props.item.image.src} alt={this.props.item.image.alt} />
      )
    }
  }
  //render the list item markup depending on whether the item has a link property or not
  renderListItem() {
    if(this.props.item && this.props.item.hasOwnProperty("target")) {
      return (
          <span className="m-list-item__content-wrapper">
            <a className="m-list-item__link" href={this.props.item.target}
              onClick={ (event) => this.handleListItemClick(event) }>
              { this.renderListItemImage() }
              { this.renderListItemName() }
              { this.renderListItemBody() }
            </a>
            <hr className="m-list-item__divider" />
          </span>
      )
    } else {
      return (
        <span className="m-list-item__content-wrapper">
          { this.renderListItemImage() }
          { this.renderListItemName() }
          { this.renderListItemBody() }
          <hr className="m-list-item__divider" />
        </span>
      )
    }
  }
  render() {
    return (
      <li className="m-list-item">
        { this.renderListItem() }
      </li>
    )
  }
}
