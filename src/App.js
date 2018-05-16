import React, { Component } from 'react'
import Form from './components/UserEdit'
import UserItem from './components/UserItem'
import Button from './components/Button'
import Filter from './components/Filter'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Button
          width={200}
          text="Add user"
          isSelected={false}
          onClick={event => console.log(event)}
        />
        <div>
          <UserItem name={'Fabian'} skills={{ html: 9, css: 8, js: 7 }} />
          <Form
            name={'Fabian'}
            skills={{ html: 9, css: 8, js: 7 }}
            onEnter={event => console.log(event)}
            onSave={event => console.log(event)}
          />
        </div>
        <br />
        <Filter selected={3} onClick={index => console.log(index)} />
      </React.Fragment>
    )
  }
}

export default App
