import { useState } from 'react'

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  // const [clicks, setClicks] = useState({
  //   left: 0, right: 0
  // })

  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    console.log('left before', left)

    const updatedLeft = left + 1
    // setLeft(left + 1)
    setLeft(updatedLeft)
    console.log('left after', updatedLeft)
    // setTotal(left + right)
    setTotal(updatedLeft + right)
  }
  // const handleLeftClick = () => 
  //   setClicks({ ...clicks, left: clicks.left + 1})

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
    setTotal(left + right)
  }
  // const handleRightClick = () => 
  //   setClicks({ ...clicks, right: clicks.right + 1})

  return (
    <>
      {left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {right}
      <p>{allClicks.join(' ')}</p>
      <p>total {total}</p>
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
