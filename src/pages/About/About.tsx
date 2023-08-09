import { Link } from "react-router-dom"
import Text from "../../components/accessories/text/Text"
import behancelogo from '../../assets/behance.svg'
import dribbblelogo from '../../assets/dribbble.svg'

const About = () => {
  return (
    <main className="w-full h-full">
      <div className='  flex flex-row-reverse bg-Palette-2'>
        <div className=" w-[800px] h-full p-[3.8rem] flex flex-col gap-10 py-20">
          <div className=" text-5xl font-PoppinsBold uppercase leading-tight text-Palette-1 z-20">
            <h1 className="">Olá,</h1>
            <h1>me chamo Matheus</h1>
            <h1>Sou desenvolvedor</h1>
            <h1 className=" text-Palette-3">Front-End</h1>
          </div>
          <Text />
          <div className=" text-Palette-3 font-Roboto text-lg flex flex-col gap-5 z-20">
            <div>
            <h4 className=" text-2xl font-PoppinsBold mb-2">Softskills</h4>
            <ul className=" flex gap-5 mt-5">
              <li className=" bg-Palette-3 text-Palette-2 py-1 px-3 rounded-3xl">HTML</li>
              <li className=" bg-Palette-3 text-Palette-2 py-1 px-3 rounded-3xl">CSS</li>
              <li className=" bg-Palette-3 text-Palette-2 py-1 px-3 rounded-3xl">JavaScript</li>
              <li className=" bg-Palette-3 text-Palette-2 py-1 px-3 rounded-3xl">ReactJS</li>
              <li className=" bg-Palette-3 text-Palette-2 py-1 px-3 rounded-3xl">TailwindCSS</li>
            </ul>
            </div>
            <div>
            <h4 className=" text-xl font-PoppinsSemi w-40 mb-2">Conhecimentos basicos</h4>
            <ul className=" flex gap-5 mt-5">
              <li className=" bg-Palette-3 text-Palette-2 py-1 px-3 rounded-3xl">NodeJS</li>
              <li className=" bg-Palette-3 text-Palette-2 py-1 px-3 rounded-3xl">Python</li>
              <li className=" bg-Palette-3 text-Palette-2 py-1 px-3 rounded-3xl">MongoDB</li>
            </ul>
            </div>
          </div>
          <div className="flex flex-row-reverse gap-2 pl-2">
            <span className=" w-1 h-8 bg-Palette-1 rounded block"></span>
            <Link to='/' className=" text-2xl font-Poppins text-Palette-1">Sobre mim</Link>
          </div>
        </div>

        <div className=" w-auto h-auto flex flex-col mr-[175px] mt-10">
        <div className="flex gap-2">
        <span className=" w-1 h-8 bg-Palette-1 rounded block"></span>
        <h3 className=" text-2xl font-PoppinsSemi text-Palette-1">Sobre mim</h3>
        </div>
        <p className=" w-44 text-lg font-Roboto text-Palette-3 ml-3 mt-5 ">Para você que não me conhece, aqui vai um pouco sobre mim</p>
        </div>
      </div>
      <footer className=" pt-20 bg-Palette-1 text-center text-Palette-3">
        <h1 className=" font-Mandalin text-4xl">Obrigado pela Atenção</h1>
        <p className=" font-PoppinsBold text-2xl w-[600px] mx-auto mt-20 mb-10">Me ajude a divulgar meu trabalho. Caso tenha uma conta no Behance ou Dribbble, me siga e curta meus trabalhos</p>
        <div className=" justify-center flex mb-20 gap-5">
          <Link to='/'><img src={behancelogo} alt="" /></Link>
          <Link to='/'><img src={dribbblelogo} alt="" /></Link>
        </div>
        <div className=" w-full text-center pb-5 mt-10 bg-Palette-1">
          <span className=" font-Poppins text-Palette-4 text-sm">Teteu © 2023</span>
          </div>
      </footer>
    </main>
  )
}

export default About