// Header
const Header = (props) => {
  // console.log(props)
  return(
    <h1>{props.data}</h1>
  )
}



// Part
const Part = (props) => {
  // console.log(props)
  return(
    <p>{props.data.name} {props.data.exercises}</p>
  )
}
// Content 
const Content = (props) => {
  return(
    <>
    <Part data={props.data[0]}/>
    <Part data={props.data[1]}/>
    <Part data={props.data[2]}/>
    </>
  )
}

// Total
const Total = (props) =>{
  console.log(props.data)

  const sum = props.data.reduce( (total,part) => part.exercises + total, 0)

  return(
    <>
    <p>Number of Exercises {sum} </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  const data = {
    name: 'Half Stack application development',
    parts: [
      {name: 'Fundamentals of React', exercises: 10},
      {name: 'Using props to pass data', exercises: 7},
      {name: 'State of a component', exercises: 14},
    ]

  }

  return (
    <div>
      <Header data={data.name}/>
      <Content data={data.parts}/>
      <Total data={data.parts}/>

    </div>
  )
}

export default App