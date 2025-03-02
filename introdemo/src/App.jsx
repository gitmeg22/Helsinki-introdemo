// Refactor the code so that it consists of three new components: Header, Content, and Total. All data still resides in the App component, which passes the necessary data to each component using props. Header takes care of rendering the name of the course, Content renders the parts and their number of exercises and Total renders the total number of exercises.

// Define the new components in the file App.jsx.

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} 
      part2={part2} exercises2={exercises2}
      part3={part3} exercises3={exercises3} />
      <Total count={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part partNumber={props.part1} exerciseCount={props.exercises1} />
      <Part partNumber={props.part2} exerciseCount={props.exercises2} />
      <Part partNumber={props.part3} exerciseCount={props.exercises3} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.partNumber} {props.exerciseCount}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.count}</p>    
    </div>
  )
}


export default App