import React from "react";
import { useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import './ReactToPdf.css'

const ref = React.createRef();

function ReactToPdf() {
    const course = useLoaderData();
    console.log(course)


    return (
        <div className="stylePdf">

            <Pdf targetRef={ref} filename="course-details.pdf">
                {({ toPdf }) => <button onClick={toPdf}> <button className="btn loading my-5">Click to Generate pdf</button></button>}
            </Pdf>


            <div ref={ref}>
                <img className="mt-12 mx-auto" src={course.img} alt="" />
                <h1 className="text-5xl m-5 text-secondary">{course.title}</h1>
                <p>For {course.level}</p>
                <h4 className="text-2xl m-3">Course fee: {course.fee} Taka</h4>
                <h4 className="text-2xl m-3">Course Duration: {course.duration}</h4>
                <p className="text-2xl m-3">Prerequisite: {course.prerequisite}</p>
                <p className="text-2xl m-3">Last day of Enrollment: {course.enrollment}</p>
                <h1 className="text-4xl m-3 text-green-500">**Thank you**</h1>
            </div>


        </div>
    );
}

export default ReactToPdf;