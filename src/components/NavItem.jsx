
const Navitem = ({ item }) => {
  return (
     <a className='relative font-rubik font-medium text-[14px] leading-[22px] align-middle '  href={item.path}>
                            {item.name}
                            {item.badge && <span className='absolute right-[-30px] top-[-25px] py-[3px] px-[9px] bg-[#E7462D] text-white rounded-[8px]'>{item.badge}</span>}
                            </a> 
  )
}

export default Navitem