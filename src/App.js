import React, { Component } from 'react'
import Button from './components/Button'
import Filter from './components/Filter'

class App extends Component {
  render() {
    return (
      <div>
        <Button
          text="Add user"
          isSelected={false}
          onClick={event => console.log(event)}
        />
        <Filter selected={0} onClick={event => console.log(event)} />
      </div>
    )
  }
}

export default App
