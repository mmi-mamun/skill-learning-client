import React from 'react';
import { useLoaderData } from 'react-router-dom';

// import ReactToPdf from '../../pages/ReactToPdf/ReactToPdf';
// const ref = React.createRef();
// const options = {
//     orientation: 'landscape',
//     unit: 'in',
//     format: [4, 2]
// };

const AboutCourse = () => {
    const course = useLoaderData();
    console.log(course)
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={course.img} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <button className="btn glass">Save as pdf</button>
                    <h1 className="text-5xl font-bold">{course.title}</h1>
                    <p><small>For {course.level}</small></p>
                    <p className="py-6">{course.description}</p>
                    <button className="btn btn-primary">Get Premium Access</button>
                </div>
            </div>


            {/* <div>
                <ReactToPdf targetRef={ref} filename="div-blue.pdf" options={options} x={.5} y={.5} scale={0.8}>
                    {({ toPdf }) => (
                        <button className='text-red-500 btn glass' onClick={toPdf}>Generate pdf</button>

                    )}
                </ReactToPdf>
                <div style={{ width: 500, height: 500, background: 'blue' }} ref={ref} />

            </div> */}
        </div>
    );
};

export default AboutCourse;