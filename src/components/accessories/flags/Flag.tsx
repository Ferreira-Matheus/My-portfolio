// import PropTypes from 'prop-types'

interface flags {
  title: string,
  paragraph: string,
}

const Flag = ({ title, paragraph }: flags) => {
  return (
    <div className=" w-auto h-auto flex flex-col items-end">
      <div className="flex flex-row-reverse gap-2">
      <span className=" w-1 h-8 bg-Palette-3 rounded block"></span>
      <h3 className=" text-2xl font-PoppinsSemi text-Palette-3">{title}</h3>
      </div>
      <p className=" w-44 text-lg font-Roboto text-Palette-3 mr-3 mt-5 text-right ">{paragraph}</p>
    </div>
  )
}

// Flag.propTypes = {
//   title: PropTypes.string.isRequired,
//   paragraph: PropTypes.string.isRequired
// }

export default Flag