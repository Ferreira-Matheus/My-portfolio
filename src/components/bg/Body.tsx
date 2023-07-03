import About from "../about/About"
import Navigation from "../nav/Navigation"

const Body = () => {
  return (
    <div className=" mx-5 rounded-[50px] bg-Fundo flex flex-col">
      <div className=" mx-auto mt-10 mb-10">
      <Navigation />
      </div>
      <div className=" text-center mt-24">
      <h1 className=" text-7xl font-PlexMono text-gray-100 mb-3">Matheus</h1>
      <h2 className=" text-5xl font-firacode text-gray-100">Developer <span className="text-Teteu">Front-End</span></h2>
      </div>
      <div className=" mx-auto mt-8 flex gap-12">
      <a className=" flex gap-4 text-2xl text-white font-PTSans items-center w-[11.25rem] h-[3.125rem] border rounded-md px-[1.25rem] py-3 hover:border-Teteu hover:text-Teteu " href="/" target="_blank"><img src="../src/assets/Linkedin.svg" alt="logo linkedin"/>Linkedin</a>
      <a className=" flex gap-4 text-2xl text-white font-PTSans items-center w-[11.25rem] h-[3.125rem] border rounded-md px-[1.25rem] py-3 hover:border-Teteu hover:text-Teteu " href="/" target="_blank"><img src="../src/assets/Github.svg" alt="logo linkedin"/>Github</a>
      </div>
      <About />
    </div>
  )
}

export default Body