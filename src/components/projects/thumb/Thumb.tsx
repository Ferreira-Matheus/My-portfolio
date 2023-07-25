interface title{
  title: string
}

const Thumb = ({ title, ...props}: title) => {
  return (
    <div className="w-[250px] flex flex-col" {...props}>
    <div className=" w-full  h-[250px] rounded-[20px] bg-slate-400">
    </div>
      <span className="text-gray-300 mt-8">{title}</span>
    </div>
  )
}

export default Thumb