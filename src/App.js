import React, { Component } from 'react'
import Button from './components/Button'
import Filter from './components/Filter'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Button
          text="Add user"
          isSelected={false}
          onClick={event => console.log(event)}
        />
        <br />
        <Filter selected={3} onClick={index => console.log(index)} />
      </React.Fragment>
    )
  }
}

export default App
