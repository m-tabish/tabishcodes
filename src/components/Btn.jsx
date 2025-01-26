/* eslint-disable react/prop-types */
function Btn({ text }) {
    return (
        <button className='rounded-sm px-3 bg-[#967259] shadow-lg text-white hover:bg-transparent hover:text-[#967259] transition-all duration-300  hover:scale-120 hover:font-extrabold hover:border-[#967259] hover:border' >{text}</button>
    )
}

export default Btn
