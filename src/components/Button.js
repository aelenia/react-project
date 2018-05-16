import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        style={{ background: this.props.isSelected ? 'lightgray' : 'white' }}
      >
        {this.props.text}
      </button>
    )
  }
}
