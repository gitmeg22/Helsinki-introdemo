import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(10)

  const hello = (who) => 
    () => {
      console.log('hello', who)
    
  }

  return (
    <>
      {value}
      <Button onClick={hello('world')}  text='world' />
      <Button onClick={hello('react')}  text='react' />
      <Button onClick={hello('function')} text='function' />
    </>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

export default App