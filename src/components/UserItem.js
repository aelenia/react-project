import React, { Component } from 'react'
import { css } from 'emotion'

export default class UserItem extends Component {
  render() {
    return (
      <div className={this.styles}>
        <p>{this.props.name}</p>
        <div>
          HTML: {this.props.skills.html} CSS: {this.props.skills.css} JS:{' '}
          {this.props.skills.js}
        </div>
      </div>
    )
  }

  get styles() {
    return css`
      margin: ${this.props.margin || 20}px;
      width: ${this.props.width || 180}px;
      border: ${this.props.border || `1px solid orange`};
    `
  }
}
