import { Link } from "react-router-dom"

export const Header = () => {
  return (
      <div className="flex justify-between py-4 bg-inner z-10 h-20">
        <Link to='/' className=" text-2xl text-Palette-2 font-Mandalin pl-10">Matheus Ferreira</Link>
        <div className=" flex flex-col items-end">
          <span className=" flex gap-3 text-Palette-2 font-PoppinsSemi text-base items-center">
            Projetos
            <span className=" w-[60px] h-[3px] bg-Palette-2 block"></span>
          </span>
          <span className=" w-[40px] h-[3px] bg-Palette-3 block mb-2"></span>
          <span className=" w-[40px] h-[3px] bg-Palette-3 block mb-2"></span>
        </div>
      </div>
  )
}