import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addOne = (button, setter) => () => {
    setter(button + 1)
  }

  return (
    <div>
      <Header header='give feedback' />
      <Button onClick={addOne(good, setGood)}  text='good' />
      <Button onClick={addOne(neutral, setNeutral)}  text='neutral' />
      <Button onClick={addOne(bad, setBad)}  text='bad' />

      <Header header='statistics' />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

const Header = ({header}) => <h1>{header}</h1>

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

export default App



// import { useState } from 'react'

// const App = () => {
//   const [value, setValue] = useState(10)

//   const setToValue = (newValue) => () => {
//       console.log('value now', newValue)
//       setValue(newValue)
//   }

//   return (
//     <>
//       {/* {value} */}
//       <Display value={value} />
//       <Button onClick={setToValue(1000)}  text='1000' />
//       <Button onClick={setToValue(0)}  text='reset' />
//       <Button onClick={setToValue(value + 1)}  text='increment' />
//     </>
//   )
// }

// // const Display = props => <div>{props.value}</div>
// const Display = ({value}) => <div>{value}</div>

// const Button = ({ onClick, text }) => {
//   return (
//     <button onClick={onClick}>
//       {text}
//     </button>
//   )
// }

// export default App