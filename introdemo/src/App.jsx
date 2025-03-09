import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  // const handleClick = () => {
  //   console.log('clicked')
  //   setCounter(counter + 1);
  // }

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  return (
    <>
      <div>{counter}</div>
      <button onClick={() => {console.log('clicked'); setCounter(counter + 1)}}>
        {/* plus */}
        {counter}
      </button>
    </>
  )
}

export default App