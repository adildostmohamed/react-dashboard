import React, { Component } from 'react';

//import helper functions to render card elements
import { renderCardTitle, renderCardSubtitle, renderCardBody, renderCardActions } from 'components/cards/cardRenderHelpers';

class ContentCard extends Component {
  render() {
    const { content } = this.props;
    const contentCard = (
      <div className="m-card">
        <div className="m-card__content-wrapper">
          <div className="m-card__title-wrapper">
            { renderCardTitle(content) }
            { renderCardSubtitle(content) }
          </div>
          <div className="m-card__body-wrapper">
            { renderCardBody(content) }
          </div>
          <div className="m-card__actions-wrapper">
            { renderCardActions(content) }
          </div>
        </div>
      </div>
    );
    return (
      <div className="col-sm-6 col-md-4 m-card__wrapper">
          { content.title ? contentCard : 'Loading' }
      </div>
    )
  }
}

ContentCard.propTypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  body: React.PropTypes.string,
  actions: React.PropTypes.object
}

export default ContentCard;
