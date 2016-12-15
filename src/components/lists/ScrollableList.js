import React, { Component } from 'react';

import ListItem from 'components/lists/ListItem';

export default class ScrollableList extends Component {
  constructor(props) {
    super(props);

    this.renderListTitle = this.renderListTitle.bind(this);
    this.renderListItems = this.renderListItems.bind(this);
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
        return (
          <ListItem key={index} item={item} />
        )
      })
    }
    return null;
  }


  render() {
    const ScrollableList = (
      <div className="m-scroll-list__wrapper">
        { this.renderListTitle() }
        <ul className="m-scroll-list">
          { this.renderListItems() }
        </ul>
      </div>
    );
    return (
      <div className="col-sm-6 col-md-3">
        { this.props.content.title ? ScrollableList : 'Loading' }
      </div>

    )
  }
}
