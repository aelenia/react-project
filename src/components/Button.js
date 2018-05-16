import React, { Component } from 'react'
import { css } from 'emotion'

export default class Button extends Component {
  render() {
    return (
      <button
        className={`${this.styles} ${this.props.extraClass}`}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    )
  }

  get styles() {
    return css`
      width: ${this.props.width || 50}px;
      height: ${this.props.height || 30}px;
      border: ${this.props.border || 1}px solid grey;
      background: ${this.props.background || 'white'};
    `
  }
}
