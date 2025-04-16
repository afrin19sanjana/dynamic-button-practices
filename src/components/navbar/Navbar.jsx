import React, { useState } from 'react';
import Link from '../link/Link';
import { Menu,  X } from 'lucide-react';
const mainNav = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Portfolio", path: "/portfolio" },
    { id: 5, name: "Contact", path: "/contact" },
];
const links =  mainNav.map(route => <Link key={route.id} route={route}></Link>)
const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <div className='container mx-auto flex justify-between'>
            <div className="flex gap-4">
                <span onClick={()=> setOpenMenu(!openMenu)} className=''>
                {openMenu ? <X></X> :<Menu className='md:hidden'></Menu>}
                    </span>
                    <ul className={`md:hidden absolute duration-1000 ${openMenu ?"top-8":"-top-40"} px-4 py-4 bg-amber-400  text-white`}>
                    {links}
                    </ul>
              
                <h2 >My Logo</h2>
            </div>
          <div className="">
          <ul className='md:flex  hidden justify-center space-x-6 '>
                {
                 links
                }
            </ul>
          </div>
            <div className="space-x-4">
                <button>Login</button>
                 <button>SignUp</button>
            </div>

        </div>
    );
};

export default Navbar;