import Flag from "../flags/Flag"

interface objects {
  title: string,
  paragraph: string,
}

const Thumb = ({title,  paragraph}: objects) => {
  return (
    <div className=' flex'>
      <Flag title={title} paragraph={paragraph}/>
      <span className=" w-[150px] h-[150px] bg-gray-500 rounded block ml-24"></span>
    </div>
  )
}

export default Thumb