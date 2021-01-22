/* eslint no-eval: 0 */
import React, {useState} from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import Numbers from './components/Numbers'
import './App.css'

const App = () => {

  const [stack, setStack] = useState('')

  const items = words(stack, /[^-^+^*^/]+/g)

  console.log('items', items)

  return (
  <main className="react-calculator">
    <Result value={items[items.length-1]} />
    <Numbers onClickNumber={number => {
      console.log('click on: ', number)
      setStack(`${stack}${number}`)
      }}/>
    <Functions
      onContentClear={clear => {
        console.log('Clear: ', clear)
        setStack('')
      }}
      onDelete={onDelete => {
        if(stack.length > 0) {
          console.log('Delete: ', onDelete)
          const newStack = stack.substring(0, stack.length - 1)
          setStack(newStack)
        }
      }}
    />
    <MathOperations
      onClickOperation={operation => {
        console.log('Operation: ', operation)
        setStack(`${stack}${operation}`)
      }}
      onClickEqual={equal => {
        console.log('Equal: ', equal)
        setStack(eval(stack).toString())
      }}
    />
  </main>)
}


export default App