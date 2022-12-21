import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaUserAlt } from "react-icons/fa";
import logo from '../../../src/images/logo.png'



const Navbar = () => {

    const { user, providerLogin, githubLogin, logOut } = useContext(AuthContext);
    const navigate = useNavigate();


    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


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



    const menus = <>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/courses'>COURSES</Link></li>
        <li><Link to='/faq'>FAQ</Link></li>
        <li><Link to='/blog'>BLOG</Link></li>
        <li><Link to='/user'>USER PROFILE</Link></li>
        {/* <li><label htmlFor="registrationModal" className="btn btn-outline btn-primary mx-0.5" onClick={() => setModal({ close: setModal })}>Register</label></li> */}
    </>

    return (
        <>
            <div className="navbar bg-black/50 backdrop-blur-lg shadow-md sticky top-0 z-50" style={{ justifyContent: 'space-between' }}>
                <div className="navbar-start" style={{ width: 'auto' }}>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-primary lg:hidden mr-2">
                            <BiMenu className="text-2xl" />
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content my-2 p-2 shadow gap-1 bg-base-100 rounded-box w-52">
                            {menus}
                        </ul>
                    </div>
                    <Link href="/"><h3 className="ml-6 text-2xl text-orange-400 font-bold">Skill Learning</h3></Link>
                    {/* <Link href="/"><img className="h-6 lg:pl-8" src={'https://i.ibb.co/tDTSd8v/logo.png'} alt="logo" /></Link> */}
                    {/* <Link href="/"><img className="w-6 lg:w-12 rounded-3xl" src={logo} alt="logo" /></Link> */}
                </div>
                <div className="navbar-end hidden lg:flex" style={{ width: 'auto' }}>
                    <ul className="menu menu-horizontal px-1">
                        {menus}
                    </ul>
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


        </>
    );
};

export default Navbar;