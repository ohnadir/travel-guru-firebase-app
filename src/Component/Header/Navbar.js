import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import {CustomLink} from '../CustomLink/CustomLink' 


const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex items-center h-14 px-6 justify-between  bg-slate-600 text-white relative z-50">
        <div className="h-7"> Genius Car Service</div>
        <div className="flex gap-4 ml-10 items-center hidden lg:flex">
              <CustomLink to='/home'>Home</CustomLink>
              <CustomLink to='/service'>Service</CustomLink>
              <CustomLink to='/experts'>Experts</CustomLink>
        </div>
        <div>
            <CustomLink to='/about'>About</CustomLink>
            <CustomLink to='/login'>Login</CustomLink>
        </div>
        <FontAwesomeIcon
          icon={open ? faTimes : faBars}
          onClick={() => setOpen(!open)}
          className="text-white w-6 h-6 cursor-pointer lg:hidden"
        />
        {open && (
          <div className="bg-slate-600 absolute top-full left-0 flex flex-col w-full pb-8 lg:hidden">
                    <div className=" flex gap-4 flex-col items-center text-xl">
                        <CustomLink to='/home'>Home</CustomLink>
                        <CustomLink to='/service'>Service</CustomLink>
                        <CustomLink to='/experts'>Experts</CustomLink>
                        <CustomLink to='/about'>About</CustomLink>
                        <CustomLink to='/login'>Login</CustomLink>
                      </div>
          </div>
        )}
      </div>
    );
};

export default Navbar;