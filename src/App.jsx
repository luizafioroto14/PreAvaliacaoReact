import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Exercicio1 from './pages/Exercicio1'
import Header from './components/Header'

function App() {
  

  return (
    <>
        <Header>
        <Routes>
        <Route path="/" element = {<Home/>}/> 
        <Route path="/Exercicio1" element= {<Exercicio1/>}/>

        <Route path="/" element = {<Home/>}/> 
        <Route path="/Header" element= {<Header/>}/>

        </Routes>
        </Header>
    
    </>
  )
}

export default App
