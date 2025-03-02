// Refactor the code so that it consists of three new components: Header, Content, and Total. All data still resides in the App component, which passes the necessary data to each component using props. Header takes care of rendering the name of the course, Content renders the parts and their number of exercises and Total renders the total number of exercises.

// Define the new components in the file App.jsx.

const App = () => {
  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1.name} exercises1={part1.exercises} 
        part2={part2.name} exercises2={part2.exercises}
        part3={part3.name} exercises3={part3.exercises} 
      />
      <Total count={part1.exercises + part2.exercises + part3.exercises} />
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