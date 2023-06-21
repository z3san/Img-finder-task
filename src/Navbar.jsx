import React from 'react';
import logo from "../public/logo.png"

const Navbar = () => {
    return (
        <>
<div className="navbar flex items-center justify-center bg-base-300">
    <img className='w-8 rounded-full' src={logo}/>
  <a className="btn btn-ghost normal-case text-xl">ImgFinder</a>
</div>
        </>
    );
};

export default Navbar;