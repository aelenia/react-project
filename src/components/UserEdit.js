import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <input type="text" value={this.props.name} />
          </div>

          <div>
            <input
              type="range"
              value={this.props.skills.html}
              min="0"
              max="10"
              step="1"
            />{' '}
            {this.props.skills.html}
          </div>
          <div>
            <input
              type="range"
              min="0"
              max="10"
              step="1"
              value={this.props.skills.css}
            />
            {this.props.skills.css}
          </div>
          <div>
            <input
              type="range"
              min="0"
              max="10"
              step="1"
              name="JS"
              value={this.props.skills.js}
            />{' '}
            {this.props.skills.js}
          </div>

          <button onClick={event => this.props.onClick()}> Save </button>
        </form>
      </div>
    )
  }
}
