import {Logo} from '../assets/images';
import Navitem from '../components/Navitem';
import Button from '../components/Button';


const Header = () => {
    const navList = [
        { id: 1, path: "#", name: "Home", badge:null,  },
        { id: 2, path: "#", name: "About", badge:null, },
        { id: 3, path: "#", name: "Promotions", badge:"HOT",  },
        { id: 4, path: "#", name: "Blogs", badge:null, },
        { id: 5, path: "#", name: "Contact Us", badge:null,  }
    ];

    return (
        <header className="py-5.75">
            <div className="containers flex items-center justify-between ">
                <a href="/" className='pl-4 lg:pl-8 xl:pl-12' >
                    <img src={Logo} alt=" Site logo" width={207} height={50}/>
                </a>
                <nav className=" hidden md:flex items-center gap-8">
                    {navList.map(item => <Navitem item={item} key={item.id}/>)}
                </nav>
                <div className="flex items-center gap-[24px] sm:gap-6 pr-6 lg:pr-12 xl:pr-16">
                    <p className='hidden sm:block text-base font-medium'>Masuk</p>
                    <Button title={"Daftar Sekarang"}/>
                </div>
            </div>
        </header>
    )
}   
export default Header;