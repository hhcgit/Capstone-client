import React, { Component } from 'react';
import './HiddenList.css';

export default class HiddenList extends Component {
//   constructor(props) {
//     super(props);
//     this.handleMouseHover = this.handleMouseHover.bind(this);
//     this.state = {
//       isHovering: false,
//     };
//   }

//   handleMouseHover() {
//     this.setState(this.toggleHoverState);
//   }

//   toggleHoverState(state) {
//     return {
//       isHovering: !state.isHovering,
//     };
//   }

  render() {
    const list = this.props.cactusList.map(cactus => 
        {
            return (<button type="button"
            onMouseEnter={this.props.handleMouseHover}
            onMouseLeave={this.props.handleMouseHover}
            >{cactus.name}</button>)
        })
    return (
      this.props.toggleHover ? 
      <div className="HiddenBox">
        {list}
      </div> : null
    );
  }
}
