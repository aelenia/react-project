import React, { Component } from 'react'
import Form from './components/UserEdit'
import UserItem from './components/UserItem'

const users = [{ name: 'Peter', skills: { html: 5, css: 5, js: 7 } }]

class App extends Component {
  render() {
    return (
      <div>
        <UserItem name={'Fabian'} skills={{ html: 9, css: 8, js: 7 }} />
        <Form
          name={'Fabian'}
          skills={{ html: 9, css: 8, js: 7 }}
          onEnter={event => console.log(event)}
          onSave={event => console.log(event)}
        />
      </div>
    )
  }
}

export default App
