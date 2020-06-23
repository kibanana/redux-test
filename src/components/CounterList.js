import React, { Component, Fragment } from 'react';
import Counter from './Counter';
import Buttons from './Buttons';
import { getRandomColor } from '../utils'

class CounterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { number: 0, color: 'black' },
      ]
    };
  }

  handleCreate = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      counters: [
        ...state.counters,
        {
          number: 0,
          color: getRandomColor(),
        }
      ]
    }));
  }

  handleRemove = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      counters: state.counters.slice(0, state.counter.legnth - 1),
    }));
  }

  handleLeftClick = (e, i) => {
    e.preventDefault();
    this.setState((state) => ({
      counters: [
        ...state.counters.slice(0, i),
        {
          number: state.counters[i].number - 1,
          color: state.counters[i].color,
        },
        ...state.counters.slice(i + 1, state.counters.legnth),
      ]
    }));
  }

  handleRightClick = (e, i) => {
    e.preventDefault();
    this.setState((state) => ({
      counters: [
        ...state.counters.slice(0, i),
        {
          number: state.counters[i].number + 1,
          color: state.counters[i].color,
        },
        ...state.counters.slice(i + 1, state.counters.legnth),
      ]
    }));
  }

  handleDoubleClick = (e, i) => {
    e.preventDefault();
    this.setState((state) => ({
      counters: [
        ...state.counters.slice(0, i),
        {
          number: state.counters[i].number,
          color: getRandomColor(),
        },
        ...state.counters.slice(i + 1, state.counters.legnth),
      ]
    }));
  }

  render() {
    const results = this.state.counters.map((_, idx) => {
      return (
        <Counter 
          key={idx}
          idx={idx}
          number={this.state.counters[idx].number}
          color={this.state.counters[idx].color}

          onClick={(e, i) => this.handleLeftClick(e, i)}
          onContextMenu={(e, i) => this.handleRightClick(e, i)}
          onDoubleClick={(e, i) => this.handleDoubleClick(e, i)}
        />
      );
    });
    return (
      <Fragment>
        <div>
          <Buttons 
            onCreate={this.handleCreate}
            onRemove={this.handleRemove}
          />
        </div>
        <div className="CounterList">
          {results}
        </div>
      </Fragment>
    );
  }
}

export default CounterList;
