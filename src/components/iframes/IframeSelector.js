import React, { Component } from 'react';

import ListItem from 'components/lists/ListItem';
import Iframe from 'components/iframes/Iframe';

export default class IframeSelector extends Component {
  constructor(props) {
    super(props);

    this.renderListTitle = this.renderListTitle.bind(this);
    this.renderListItems = this.renderListItems.bind(this);
    this.setItemToView = this.setItemToView.bind(this);
    this.state = {
      item: {}
    }
  }
  setItemToView(event, item) {
    //prevent default action
    event.preventDefault();
    //create a new copy of the existing form state
    const newItem = {...this.state.item};

    //set the value of the src property to be the link value of the item that was clicked
    newItem.src = item.target;

    newItem.size = "Medium";

    //update state with the new value of the form object
    this.setState({item: newItem});
  }
  renderListTitle() {
    if(this.props.content && this.props.content.hasOwnProperty("title")) {
      return (
        <div className="m-scroll-list__title-wrapper">
          <h3 className="m-scroll-list__title">{ this.props.content.title }</h3>
        </div>
      )
    }
    return null;
  }
  renderListItems() {
    if(this.props.content && this.props.content.hasOwnProperty("items")) {
      const itemKeys = Object.keys(this.props.content.items);
      return itemKeys.map( (itemKey, index) => {
        const item = this.props.content.items[itemKey];
        return <ListItem key={index} item={item} handleClick={ this.setItemToView }/>
      });
    }
    return null;
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="m-scroll-list__wrapper">
            { this.renderListTitle() }
            <ul className="m-scroll-list">
              { this.renderListItems() }
            </ul>
          </div>
        </div>
        <Iframe content={this.state.item} />
      </div>

    )
  }
}
