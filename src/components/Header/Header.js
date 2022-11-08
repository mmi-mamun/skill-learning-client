import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import logo from '../../images/logo.png'
import { FaMoon, FaSun, FaUserAlt } from "react-icons/fa";
import { useState } from 'react';


const Header = () => {
    const { user, providerLogin, githubLogin, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleToggle = event => {
        setToggle(event.target.checked);
    }

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => {
                console.error('Error::', error);
            })
    }

    const handleGithubLogin = () => {
        githubLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => {
                console.error('Error::', error);
            })
    }

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error('Error::', error);
            })
    }



    return (
        <nav>
            {/* {toggle ? */}
            <div className=
                {
                    toggle ?
                        "navbar bg-base-100 bg-neutral mx-auto grid grid-cols-4"
                        :
                        "navbar bg-base-100 bg-light mx-auto grid grid-cols-4"
                }>
                <div className="flex-1 mx-2 lg:col-span-3 md:col-span-3 sm:col-span-4  lg:flex-row sm:flex-col ">
                    <div className='flex items-center sm:my-2'>
                        <div className='mx-3'><img src={logo} style={{ height: '40px', width: '40px', borderRadius: '50%' }} alt="" />
                        </div>
                        <Link to={'/'} className=" btn btn-ghost normal-case text-xl text-white">Skill Learning</Link>
                    </div>
                    <div className='w-50 mx-auto flex flex-row gap-5 text-white sm:mb-3 sm:mt-5'>
                        <Link to='/'>HOME</Link>
                        <Link to='/courses'>COURSES</Link>
                        <Link to='/faq'>FAQ</Link>
                        <Link to='/blog'>BLOG</Link>

                    </div>
                </div>

                <div className="flex-none mr-3 content-center items-center lg:col-span-1 md:col-span-1 sm:col-span-4">
                    <div className="dropdown dropdown-end mx-auto">
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                {
                                    toggle ?
                                        <p className='label-text flex items-center gap-2'><span><FaMoon></FaMoon></span><span>Dark</span></p>
                                        :
                                        <p className='label-text flex items-center gap-2 text-white'><span><FaSun></FaSun></span><span>Light</span></p>
                                }

                                <input onClick={handleToggle} type="checkbox" className="toggle toggle-primary mx-5" />
                            </label>
                        </div>



                    </div>

                    {
                        user?.uid ?

                            <div className="dropdown dropdown-end mr-3">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div title={user?.displayName} className="w-10 rounded-full">
                                        {
                                            user?.photoURL ? <img src={user?.photoURL} /> : <FaUserAlt className='w-10 mt-3'></FaUserAlt>
                                        }
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            {user?.displayName}
                                            <span className="badge">User</span>
                                        </a>
                                    </li>
                                    <p><small>{user?.email}</small></p>
                                    <li ><a onClick={handleLogOut}><p className='text-red-500 font-bold'>Log out</p></a></li>
                                </ul>
                            </div>
                            :
                            <div className="dropdown dropdown-end mx-5">
                                <label tabIndex={0} className="btn btn-ghost">
                                    <div className="">
                                        <h3>Login</h3>
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><Link to='/login' className='text-white p-5'>Login manually</Link></li>
                                    <li><button onClick={handleGoogleLogin}>Login with Google</button></li>
                                    <li><Link onClick={handleGithubLogin}>Login with Github</Link></li>
                                </ul>
                            </div>
                    }


                </div>
            </div>

        </nav >

    );
};

export default Header;