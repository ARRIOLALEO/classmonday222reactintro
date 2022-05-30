import Header from './components/Header'
import Body from './components/Body'
import Footer from "./components/Footer"
import Button from './components/Button'
import './App.css'
function App(){
  const name = "im a function from react"
  function name1(){
    console.log("hello")
  }
  const arr =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return(
    <>
    {
      arr.map(day=> <Header day={day} time="19:45" />)
    }
      
      <Header day="Saturday" time="18:00"/>
      <Button color="blue" action={name1} >SEND</Button>
      <Button color="red">DELETE</Button>
      <Button color="green">GREEN</Button>
      <Body/>
      <Footer/>
    </>
  )
}

export default App