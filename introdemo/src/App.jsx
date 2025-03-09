import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => () => {
      console.log('value now', newValue)
      setValue(newValue)
  }

  return (
    <>
      {value}
      <Button onClick={setToValue(1000)}  text='1000' />
      <Button onClick={setToValue(0)}  text='reset' />
      <Button onClick={setToValue(value + 1)}  text='increment' />
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