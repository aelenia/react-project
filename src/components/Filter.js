import React, { Component } from 'react'
import Button from './Button'

export default class Filter extends Component {
  render() {
    return (
      <div>
        <Button text="HTML" onClick={this.props.onClick} />
        <Button text="CSS" onClick={this.props.onClick} />
        <Button text="JS" onClick={this.props.onClick} />
        <Button text="All" onClick={this.props.onClick} />
      </div>
    )
  }
}
