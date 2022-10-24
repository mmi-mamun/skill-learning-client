import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100 bg-neutral mx-auto">
            <div className="flex-1">
                <a className="mr-5 btn btn-ghost normal-case text-xl text-white">daisyUI</a>
                <div className='w-50 mx-auto flex flex-row gap-5 text-white'>
                    <Link to='/courses'>Courses</Link>
                    <Link to='/faq'>FAQ</Link>
                    <Link to='/blog'>BLOG</Link>
                    <Link to='/toggle'>toggle bg</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </div>
            </div>

            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                    </label>



                </div>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;