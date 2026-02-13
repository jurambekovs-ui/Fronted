
const Button = ({ title, icon, extraClass }) => {
  return (
    <button className={`py-[10px] rounded-[100px] px-[18px] bg-[#8BAC3E]  text-white  leading-[22px] text-[14px] ${extraClass}`}>
      {icon && <span className="inline-flex items-center">{icon}</span>}
      {title}
    </button>
  )
}

export default Button