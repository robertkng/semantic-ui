import React from 'react'
import { Button, Input, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

import './AddTodo.css'

let AddTodo = ({ dispatch }) => {
  return (
    <div className="AddTodo">
      <form onSubmit={e => {
        e.preventDefault()
        const input = document.querySelector('input[name=todo]')
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <Input className="TodoText" placeholder='Task...' name='todo' />
        <Button animated className="TodoButton" basic type='submit'>
          <Button.Content visible>New Todo</Button.Content>
          <Button.Content hidden>
          <Icon name='right arrow'/>
          </Button.Content>
        </Button>

      </form>
        <div>
    <Button
      content='Like'
      icon='heart'
      label={{ as: 'a', basic: true, content: '2,048' }}
      labelPosition='right'
    />

    <Button
      content='Like'
      icon='heart'
      label={{ as: 'a', basic: true, pointing: 'right', content: '2,048' }}
      labelPosition='left'
    />

    <Button
      icon='fork'
      label={{ as: 'a', basic: true, content: '2,048' }}
      labelPosition='left'
    />
    <Button basic loading>Loading</Button>
  </div>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
