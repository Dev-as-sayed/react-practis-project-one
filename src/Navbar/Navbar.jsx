
import { useState } from "react";
import Link from "./LInk/LInk";
import {FaAlignJustify, FaRegCircleXmark} from "react-icons/fa6";


const Navbar = () => {

    const routes = [
        { name: 'Home', path: '/', id: 1 },
        { name: 'About', path: '/about', id: 2 },
        { name: 'Services', path: '/services', id: 3 },
        { name: 'Contact', path: '/contact', id: 4 },
        { name: 'Blog', path: '/blog', id: 5 }
      ];
    
    const [opne, setOpen] = useState(true)
      
    return (
        <nav>
            <div className="md:hidden text-2xl " onClick={ () => {setOpen(!opne)}}>
                {
                    opne === true ? <FaRegCircleXmark></FaRegCircleXmark> : <FaAlignJustify></FaAlignJustify>
                }
                
            </div>
            <ul className={`list-none absolute duration-1000 ${ opne ? 'top-7' : '-top-48'} md:flex static`}> 
                {
                    routes.map( route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;