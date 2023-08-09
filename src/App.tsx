import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Header } from "./components/header/Header"
import Home from "./pages/Home/Home"
import About from './pages/About/About'

function App() {

  return (
    <div className=" bg-inner box-border w-full h-full relative grid">
      <div className=" flex flex-row gap-[300px] fixed justify-self-center z-10">
        <span className="w-[1px] h-screen bg-[rgba(79,88,83,20%)]"></span>
        <span className="w-[1px] h-screen bg-[rgba(79,88,83,20%)]"></span>
        <span className="w-[1px] h-screen bg-[rgba(79,88,83,20%)]"></span>
      </div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
