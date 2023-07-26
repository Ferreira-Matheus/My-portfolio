import { Header } from "./components/header/Header"

function App() {

  return (
    <div className=" bg-Palette-1 box-border w-full h-screen relative grid">
      <div className=" flex flex-row gap-[300px] absolute justify-self-center z-0">
        <span className="w-[1px] h-screen bg-Palette-4/50"></span>
        <span className="w-[1px] h-screen bg-Palette-4/50"></span>
        <span className="w-[1px] h-screen bg-Palette-4/50"></span>
      </div>
      <Header/>
    </div>
  )
}

export default App
