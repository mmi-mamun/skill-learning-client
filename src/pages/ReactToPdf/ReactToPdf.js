import React from 'react';



const ref = React.createRef();

const ReactToPdf = () => {
    return (
        <div className="App">

            <div ref={ref}>
                <h1>Hello CodeSandbox</h1>
                <h2>Start editing to see some magic happen!</h2>
            </div>
        </div>
    );
};

export default ReactToPdf;