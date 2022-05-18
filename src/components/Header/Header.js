import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-black ">
            <div className="flex-1">
                <Link  to='/' className="btn btn-ghost normal-case text-xl text-w text-white">to do app </Link>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end mx-20">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={''} alt='' />
                        </div>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to='/' className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><Link to='/' >Settings</Link></li>
                        <li><Link to='/' >Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;