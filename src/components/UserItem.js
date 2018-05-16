import React, { Component } from 'react'

export default class UserItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <div>
          HTML: {this.props.skills.html} CSS: {this.props.skills.css} JS:{' '}
          {this.props.skills.js}
        </div>
      </div>
    )
  }
}
