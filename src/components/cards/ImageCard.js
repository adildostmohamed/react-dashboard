import React, { Component } from 'react';

//import helper functions to render card elements
import { renderCardTitle, renderCardSubtitle, renderCardBody, renderCardActions, renderCardImage } from 'components/cards/cardRenderHelpers';

class ImageCard extends Component {
  render() {
    const { content } = this.props;
    const imageCard = (
      <div className="m-card">
        <div className="m-card__image-wrapper">
          { renderCardImage(content) }
        </div>
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
        { content.image ? imageCard : 'Loading' }
      </div>
    )
  }
}


ImageCard.propTypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  body: React.PropTypes.string,
  actions: React.PropTypes.object,
  image: React.PropTypes.string
}

export default ImageCard;
