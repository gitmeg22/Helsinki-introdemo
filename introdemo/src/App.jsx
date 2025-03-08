const App = () => {
  const course = 'Half Stack application development'

  // parts[0].name; parts[0].exercises
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total count={parts} />
      {/* <Total count={parts[0].exercises + parts[1].exercises + parts[2].exercises} /> */}
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part partNumber={props.parts[0].name} exerciseCount={props.parts[0].exercises} />
      <Part partNumber={props.parts[1].name} exerciseCount={props.parts[1].exercises} />
      <Part partNumber={props.parts[2].name} exerciseCount={props.parts[2].exercises} />
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.partNumber} {props.exerciseCount}</p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.count[0].exercises + props.count[1].exercises + props.count[2].exercises}</p>
    </div>
  )
}

// const Total = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <p>Number of exercises {props.count}</p>
//     </div>
//   )
// }


export default App