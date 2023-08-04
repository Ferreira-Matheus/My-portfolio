import {Link} from 'react-router-dom'
import Flag from "../../components/accessories/flags/Flag"
import Thumb from "../../components/accessories/thumb/Thumb"

const Home = () => {
  return (
    <>
    <div className="z-10 flex py-[100px] w-full h-full">
      <div className=" w-[800px] h-full bg-Palette-2 py-[3.8rem] px-10 flex flex-col">
        <div className=" flex  flex-col items-end gap-5">
        <Thumb title='Origamid -Wild Life' paragraph="Projeto feito no curso de JavaScript para iniciantes."/>
        <Thumb title='Rocketseat - Desafio CSS' paragraph="Projeto para testar habilidades com CSS."/>
        <Thumb title='Origamid - Dogs' paragraph="Projeto final do curso de ReactJS."/>
        <Thumb title='PartyTime' paragraph="Projeto com inpiração de um curso que vi na internet."/>
        </div>
        {/* <div>
        <Link to="/about" className=" text-2xl text-Palette-3 font-Poppins border-l-4  border-Palette-3 pl-2">Sobre mim</Link>
        </div> */}
        <div className="flex flex-row gap-2 pl-2">
          <span className=" w-1 h-8 bg-Palette-3 rounded block"></span>
          <Link to='/about' className=" text-2xl font-Poppins text-Palette-3">Sobre mim</Link>
        </div>
      </div>
      <div className=" ml-[120px] mt-10">
      <Flag title="Projetos" paragraph="Alguns Projetos que desenvolvi ou fiz com acompanhamento."/>
      </div>
    </div>
    <div className=" w-full text-center py-5">
    <span className=" font-Poppins text-Palette-4 text-sm">Teteu © 2023</span>
    </div>
    </>
  )
}

export default Home