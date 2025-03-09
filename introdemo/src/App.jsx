const App = (props) => {
  console.log(props)

  const {counter} = props
  console.log(props)

  return (
    <div>{counter}</div>
  )
}

export default App