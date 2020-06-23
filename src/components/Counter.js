import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  render() {
    return (
      <div
        className="Counter"
        onClick={(e) => this.props.onClick(e, this.props.idx)}
        onContextMenu={(e) => this.props.onContextMenu(e, this.props.idx)}
        onDoubleClick={(e) => this.props.onDoubleClick(e, this.props.idx)}
        style={{backgroundColor: this.props.color }}
      >
        {this.props.number}
      </div>
    );
  }
}

export default Counter;
