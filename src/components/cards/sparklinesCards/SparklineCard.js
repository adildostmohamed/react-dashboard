import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { renderCardTitle, renderCardSubtitle, renderCardActions } from 'components/cards/cardRenderHelpers';

export default class SparklineCard extends Component {
  constructor(props) {
    super(props);

    this.renderCardSparkline = this.renderCardSparkline.bind(this);
  }
  renderCardSparkline() {
    if(this.props.content && this.props.content.hasOwnProperty("data")) {
      return (
        <Sparklines data={this.props.content.data} limit={10} >
          <SparklinesLine className="m-card__sparkline"/>
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
      )
    }
  }
  render() {
    const { content } = this.props;
    const sparklineCard = (
      <div className="m-card">
        <div className="m-card__content-wrapper">
          <div className="m-card__title-wrapper">
            { renderCardTitle(content) }
            { renderCardSubtitle(content) }
          </div>
          <div className="m-card__sparkline-wrapper">
            { this.renderCardSparkline() }
          </div>
          <div className="m-card__actions-wrapper">
            { renderCardActions(content) }
          </div>
        </div>
      </div>
    );
    return (
      <div className="col-sm-6 col-md-3 m-card__wrapper">
        { content.title ? sparklineCard : 'Loading' }
      </div>
    )
  }
}
