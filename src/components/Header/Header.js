import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div class="navbar bg-base-100">
            <div class="flex-1">
                <Link  to='/' className="btn btn-ghost normal-case text-xl">to do app </Link>
            </div>
            <div class="flex-none">
                <div class="dropdown dropdown-end">
                    <label tabIndex="0" class="btn btn-ghost btn-circle">
                        <div class="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span class="badge badge-sm indicator-item">8</span>
                        </div>
                    </label>
                </div>
                <div class="dropdown dropdown-end mx-20">
                    <label tabIndex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src={''} alt='' />
                        </div>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to='/' class="justify-between">
                                Profile
                                <span class="badge">New</span>
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