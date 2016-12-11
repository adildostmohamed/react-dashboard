// import React, { Component } from 'react';
// import base from 'config/base';
//
// import CardContent from 'components/cards/CardContent';
//
// class CardContentContainer extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       contentCard: {}
//     }
//   }
//   componentDidMount(){
//     this.firebaseRef = base.syncState(this.props.cardToSync,{
//       context: this,
//       state: 'contentCard'
//     });
//   }
//   componentWillUnmount() {
//     base.removeBinding(this.firebaseRef);
//   }
//   render() {
//     return (
//       <div className="m-card-row">
//       </div>
//     )
//   }
// }
//
// export default CardContentContainer;
