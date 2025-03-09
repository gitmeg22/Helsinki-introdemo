import { useState } from 'react'

const App = () => {
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  // const handleLeftClick = () => {
  //   const newClicks = {
  //     left: clicks.left + 1,
  //     // right: clicks.right
  //     ...clicks
  //   }
  //   setClicks(newClicks)
  // }
  const handleLeftClick = () => 
    setClicks({ ...clicks, left: clicks.left + 1})

  // const handleRightClick = () => {
  //   const newClicks = {
  //     ...clicks,
  //     // left: clicks.left,
  //     right: clicks.right + 1
  //   }
  //   setClicks(newClicks)
  // }
  const handleRightClick = () => 
    setClicks({ ...clicks, right: clicks.right + 1})

  return (
    <>
      {clicks.left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {clicks.right}
      {/* {left}
      <Button onClick={() => setLeft(left + 1)} text='left' />
      <Button onClick={() => setRight(right + 1)} text='right' />
      {right} */}
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


  // const [ counter, setCounter ] = useState(0)
  // const increaseByOne = () => setCounter(counter + 1)
  // const decreaseByOne = () => setCounter(counter - 1)
  // const setToZero = () => setCounter(0)

  {/* <Display counter={counter} />
  <Button onClick={increaseByOne} text='plus' />
  <Button onClick={setToZero} text='zero' />
  <Button onClick={decreaseByOne} text='minus' /> */}

  // const Display = ({counter}) => <div>{counter}</div>
