import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Header } from "./components/header/Header"
import Home from "./pages/Home/Home"
import About from './pages/About/About'

function App() {

  return (
    <div className=" bg-Palette-1 box-border w-full h-full relative grid">
      <div className=" flex flex-row gap-[300px] fixed justify-self-center z-0">
        <span className="w-[1px] h-screen bg-Palette-4/50"></span>
        <span className="w-[1px] h-screen bg-Palette-4/50"></span>
        <span className="w-[1px] h-screen bg-Palette-4/50"></span>
      </div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
