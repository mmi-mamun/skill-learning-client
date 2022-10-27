import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CheckOutPage = () => {
    const course = useLoaderData();
    const [displayToast, setDisplayToast] = useState(false);
    console.log(course)
    const handleSubmitCheckout = (event) => {
        event.preventDefault();
        console.log('clicked from checkout');
        setDisplayToast(true);

    }
    return (
        <div className="mockup-window border bg-base-300">


            <div className="flex justify-center px-4 py-3 bg-base-200">

                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <img src={course.img} className="max-w-sm rounded-lg shadow-2xl" />

                        <form onSubmit={handleSubmitCheckout} className="hero min-h-screen bg-base-200">
                            <div className="hero-content flex-col">
                                <div className="text-center">
                                    <h1 className="text-4xl font-bold">CHECKOUT PAGE</h1>
                                    <p>Course ID: {course.id}</p>
                                </div>


                                {/*********************** Get Name  *******************/}
                                <div className="flex gap-2">
                                    <div className="form-control">
                                        <label className="input-group input-group-vertical">
                                            <span>First Name</span>
                                            <input type="text" className="input input-bordered" required />
                                        </label>
                                    </div>

                                    <div className="form-control">
                                        <label className="input-group input-group-vertical">
                                            <span>Last Name</span>
                                            <input type="text" className="input input-bordered" />
                                        </label>
                                    </div>
                                </div>

                                {/*********************** Get Contact Number & Email*******************/}
                                <div className="flex gap-2">
                                    <div className="form-control">
                                        <label className="input-group input-group-vertical">
                                            <span>Give your contact number</span>
                                            <input type="text" className="input input-bordered" required />
                                        </label>
                                    </div>

                                    <div className="form-control">
                                        <label className="input-group input-group-vertical">
                                            <span>Enter your mail account</span>
                                            <input type="email" className="input input-bordered" placeholder='user@gmail.com' required />
                                        </label>
                                    </div>
                                </div>




                                {/*********************** Get Gender & Location  *******************/}
                                <div className="flex gap-2">
                                    <div className="form-control">
                                        <div className="input-group">
                                            <span className="">Gender</span>
                                            <select className="select select-bordered">
                                                <option disabled selected>Custom</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-control">
                                        <label className="input-group">
                                            <span>City</span>
                                            <input type="text" className="input input-bordered" required />
                                        </label>
                                    </div>



                                </div>


                                {/*********************** Get Address  *******************/}
                                <div className="flex gap-2">
                                    <div className="form-control">
                                        <label className="input-group input-group-xs">
                                            <span>State</span>
                                            <input type="text" className="input input-bordered input-xs" required />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="input-group input-group-xs">
                                            <span>ZIP Code</span>
                                            <input type="text" className="input input-bordered input-xs" required />
                                        </label>
                                    </div>
                                </div>

                                {/*********************** Payment Method  *******************/}
                                <h3 className='mt-3 text-secondary text-2xl'>Payment Method</h3>
                                <div className="flex gap-2" required>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <input type="radio" name="radio-6" className="radio checked:bg-red-500" checked />
                                            <span className="label-text ml-2">Rocket</span>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <input type="radio" name="radio-6" className="radio checked:bg-blue-500" checked />
                                            <span className="label-text ml-2">Bkash</span>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <input type="radio" name="radio-6" className="radio checked:bg-blue-500" checked />
                                            <span className="label-text ml-2">Nagad</span>
                                        </label>
                                    </div>
                                </div>


                                {/*********************** Display Toast After Submit *******************/}

                                {
                                    displayToast &&
                                    <div className="toast toast-middle block toast-center transition  duration-200" style={{ width: '500px' }}>
                                        <div className="alert alert-info">
                                            <div>
                                                <div>
                                                    <p className='my-2'>Course ID : {course.id}</p>
                                                    <p className='my-2'>Course Name : {course.title}</p>
                                                    <img className='my-2' src={course.img} alt="" />

                                                    <p className='my-2'>We are processing your student profile for this course...</p>
                                                    <p className='my-2'>We will send the confirmation status to your given mail address...</p>
                                                    <Link to={'/'}><button className="btn btn-active text-black btn-link my-3">Click to go home page</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="alert alert-success mt-3">
                                            <div>
                                                <span>You are successfully added...</span>
                                            </div>
                                        </div> */}
                                    </div>

                                }


                                {/*********************** Submit Button  *******************/}
                                <button className="btn gap-2">
                                    CHECKOUT
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                </button>



                                {/* <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    <div className="card-body">
                                        <label className="input-group">
                                            <span>Email</span>
                                            <input type="text" placeholder="info@site.com" className="input input-bordered" />
                                        </label>

                                        <div className="input-group">
                                            <select className="select select-bordered">
                                                <option disabled selected>Gender</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                            <button className="btn">Select your Gender</button>
                                        </div>

                                        <label className="input-group">
                                            <span>Price</span>
                                            <input type="text" placeholder="10" className="input input-bordered" />
                                            <span>USD</span>
                                        </label>

                                        <div className="form-control">
                                            <input type="text" placeholder="password" className="input input-bordered" />
                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary">Login</button>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CheckOutPage;