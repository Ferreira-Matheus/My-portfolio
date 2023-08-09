import { Link } from "react-router-dom"

export const Header = () => {
  return (
      <div className="flex justify-between py-4 bg-Palette-2 z-0 h-20">
        <Link to='/' className=" text-2xl text-Palette-1 font-Mandalin pl-10">Matheus Ferreira</Link>
        <div className=" flex flex-col items-end">
          <span className=" w-[40px] h-[3px] bg-Palette-3 rounded-s block mb-2"></span>
          <span className=" w-[40px] h-[3px] bg-Palette-3 rounded-s block mb-2"></span>
          <span className=" flex gap-3 text-Palette-1 font-PoppinsSemi text-xs items-center">
            Sobre
            <span className=" w-[60px] h-[3px] rounded-s bg-Palette-1 block"></span>
          </span>
        </div>
      </div>
  )
}