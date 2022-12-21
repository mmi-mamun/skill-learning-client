import React from 'react';
import { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Home = () => {
    const { user } = useContext(AuthContext);
    return (

        <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary mt-12">Who am I</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {
                        user?.photoURL ? <img src={user?.photoURL} alt="" /> :
                            <div className='flex justify-center'><FaUserAlt ></FaUserAlt></div>
                    }
                    <br />
                    {
                        user?.uid ?
                            <>
                                <li>{user?.name}</li>
                                <li>{user?.displayName}</li>
                                <br />
                                <li>{user?.email}</li>
                            </> : <>
                                <li>Unregistered User</li>
                                <br />
                                <li>Need to login for showing more info</li>
                                <br />
                                <Link to={'/login'}><button className="btn glass">Click to Login</button></Link>
                            </>
                    }


                </ul>
            </div>
        </div>
    );
};

export default Home;