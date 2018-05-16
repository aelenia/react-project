import React, { Component } from 'react'
import Button from './Button'

export default class Filter extends Component {
  render() {
    return (
      <React.Fragment>
        <Button
          text="HTML"
          onClick={event => this.props.onClick(0)}
          isSelected={this.props.selected === 0}
        />
        <Button
          text="CSS"
          onClick={event => this.props.onClick(1)}
          isSelected={this.props.selected === 1}
        />
        <Button
          text="JS"
          onClick={event => this.props.onClick(2)}
          isSelected={this.props.selected === 2}
        />
        <Button
          text="All"
          onClick={event => this.props.onClick(3)}
          isSelected={this.props.selected === 3}
        />
      </React.Fragment>
    )
  }
}
