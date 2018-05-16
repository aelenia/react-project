import React, { Component } from 'react'
import Button from './Button'
import { css } from 'emotion'

export default class Filter extends Component {
  render() {
    return (
      <React.Fragment>
        <Button
          extraClass={this.styles}
          text="HTML"
          onClick={event => this.props.onClick(0)}
          isSelected={this.props.selected === 0}
        />
        <Button
          extraClass={this.styles}
          text="CSS"
          onClick={event => this.props.onClick(1)}
          isSelected={this.props.selected === 1}
        />
        <Button
          extraClass={this.styles}
          text="JS"
          onClick={event => this.props.onClick(2)}
          isSelected={this.props.selected === 2}
        />
        <Button
          extraClass={this.styles}
          text="All"
          onClick={event => this.props.onClick(3)}
          isSelected={this.props.selected === 3}
        />
      </React.Fragment>
    )
  }

  get styles() {
    return css`
      box-shadow: ${this.props.shadow || '5px 5px 10px grey'};
    `
  }
}
