import React, {useState} from 'react'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import Numbers from './components/Numbers'
import './App.css'

const App = () => {

  const [stack, setStack] = useState('')

  return (
  <main className="react-calculator">
    <Result value={stack} />
    <Numbers onClickNumber={number => {
      console.log('click on: ', number)
      setStack(`${stack}${number}`)
      }}/>
    <Functions
      onContentClear={clear => console.log('Clear: ', clear)}
      onDelete={onDelete => console.log('Delete: ', onDelete)}
    />
    <MathOperations
      onClickOperation={operation => console.log('Operation: ', operation)}
      onClickEqual={equal => console.log('Equal: ', equal)}
    />
  </main>)
}


export default App