const App = () => {

  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}


const Hello = ({ name, age }) => {
  console.log("Name: " + name + ", Age: " ,age)

  // const name = props.name
  // const age = props.age
  // const { name, age } = props

  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      {/* <p>Hello {props.name}, you are {props.age} years old</p> */}
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

export default App

















// const course = {
//   name: 'Half Stack application development',
//   parts: [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]
// }

// return (
//   <div>
//     <Header course={course.name} />
//     <Content parts={course.parts} />
//     <Total count={course.parts} />
//   </div>
// )


// const Header = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <h1>{props.course}</h1>
//     </div>
//   )
// }

// const Content = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <Part partNumber={props.parts[0].name} exerciseCount={props.parts[0].exercises} />
//       <Part partNumber={props.parts[1].name} exerciseCount={props.parts[1].exercises} />
//       <Part partNumber={props.parts[2].name} exerciseCount={props.parts[2].exercises} />
//     </div>
//   )
// }

// const Part = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <p>{props.partNumber} {props.exerciseCount}</p>
//     </div>
//   )
// }

// const Total = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <p>Number of exercises {props.count[0].exercises + props.count[1].exercises + props.count[2].exercises}</p>
//     </div>
//   )
// }
