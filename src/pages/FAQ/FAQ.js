import React from 'react';

const FAQ = () => {
    return (
        <div>
            <div className="grid text-justify rounded bg-primary text-primary-content place-content-center m-3 p-2">
                <p className='text-center text-2xl font-bold'>1. What is JSX?</p>
                <p className='my-2'>
                    JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.</p>
            </div>

            <div className="grid text-justify m-3 p-3 rounded bg-accent text-accent-content place-content-center">
                <p className='text-center text-2xl font-bold'>2. Can web browsers read JSX directly? </p>
                <p className='my-2'>Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object.
                    For a web browser to read a JSX file, the file needs to be transformed into a regular JavaScript object. For this, we use Babel</p>
            </div>

            <div className="grid text-justify m-3 p-3 rounded bg-secondary text-secondary-content place-content-center">
                <p className='text-center text-2xl font-bold'>3. What is the virtual DOM?</p>
                <p className='my-2'>DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects.</p>
            </div>

            <div className="grid text-justify m-3 p-3 rounded bg-primary text-primary-content place-content-center">
                <p className='text-center text-2xl font-bold'>4. What is an event in React?</p>
                <p className='my-2'>An event is an action that a user or system may trigger, such as pressing a key, a mouse click, etc.

                    React events are named using camelCase, rather than lowercase in HTML.
                    With JSX, you pass a function as the event handler, rather than a string in HTML.</p>
            </div>

            <div className="grid text-justify m-3 p-3 rounded bg-accent text-accent-content place-content-center">
                <p className='text-center text-2xl font-bold'>5. What are synthetic events in React?</p>
                <p className='my-2'>Synthetic events combine the response of different browser's native events into one API, ensuring that the events are consistent across different browsers.
                    The application is consistent regardless of the browser it is running in. Here, preventDefault is a synthetic event.Synthetic events combine the response of different browser's native events into one API, ensuring that the events are consistent across different browsers.
                    The application is consistent regardless of the browser it is running in. Here, preventDefault is a synthetic event.</p>
            </div>

            <div className="grid text-justify m-3 p-3 rounded bg-secondary text-secondary-content place-content-center">
                <p className='text-center text-2xl font-bold'>6. Why is there a need for using keys in Lists?</p>
                <p className='my-2'>Keys are very important in lists for the following reasons:
                </p>
                <p>* A key is a unique identifier and it is used to identify which items have changed, been updated or deleted from the lists</p>
                <p className='mb-1'>*It also helps to determine which components need to be re-rendered instead of re-rendering all the components every time. Therefore, it increases performance, as only the updated components are re-rendered</p>
            </div>

            <div className="grid text-justify m-3 p-3 rounded bg-primary text-primary-content place-content-center">
                <p className='text-center text-2xl font-bold'>7. What is a state in React?</p>
                <p className='my-2'>The state is a built-in React object that is used to contain data or information about the component. The state in a component can change over time, and whenever it changes, the component re-renders.
                    The change in state can happen as a response to user action or system-generated events. It determines the behavior of the component and how it will render.</p>
            </div>

            <div className="grid text-justify m-3 p-3 rounded bg-accent text-accent-content place-content-center">
                <p className='text-center text-2xl font-bold'>8. What are props in React?</p>
                <p className='my-2'>Props are short for Properties. It is a React built-in object that stores the value of attributes of a tag and works similarly to HTML attributes.
                    Props provide a way to pass data from one component to another component. Props are passed to the component in the same way as arguments are passed in a function.</p>
            </div>

            <div className="grid text-justify m-3 p-3 rounded bg-secondary text-secondary-content place-content-center">
                <p className='text-center text-2xl font-bold'>9. What is a higher-order component in React?</p>
                <p className='my-2'>A higher-order component acts as a container for other components. This helps to keep components simple and enables re-usability. They are generally used when multiple components have to use a common logic.</p>
            </div>

            <div className="grid text-justify m-3 p-3 rounded bg-primary text-primary-content place-content-center">
                <p className='text-center text-2xl font-bold'>10. Explain the lifecycle methods of components.</p>
                <p className='my-2'>

                    <li>getInitialState(): This is executed before the creation of the component.</li>
                    <li>componentDidMount(): Is executed when the component gets rendered and placed on the DOM.</li>
                    <li>shouldComponentUpdate(): Is invoked when a component determines changes to the DOM and returns a “true” or “false” value based on certain conditions.</li>
                    <li>shouldComponentUpdate(): Is invoked when a component determines changes to the DOM and returns a “true” or “false” value based on certain conditions.</li>
                    <li>componentDidUpdate(): Is invoked immediately after rendering takes place.</li>
                    <li>componentWillUnmount(): Is invoked immediately before a component is destroyed and unmounted permanently.</li>
                    <li>componentWillUnmount(): Is invoked immediately before a component is destroyed and unmounted permanently.</li>
                    <p className='my-2'>So far, if you have any doubts about the above React interview questions and answers, please ask your questions in the section below.</p>
                </p>
            </div>

            <div className="grid text-justify m-3 p-3 rounded bg-accent text-accent-content place-content-center">
                <p className='text-center text-2xl font-bold'>11. What is Redux?</p>
                <p className='my-2'>Redux is an open-source, JavaScript library used to manage the application state. React uses Redux to build the user interface. It is a predictable state container for JavaScript applications and is used for the entire application’s state management.</p>
            </div>

            <div className="grid text-justify m-3 p-3 rounded bg-secondary text-secondary-content place-content-center">
                <p className='text-center text-2xl font-bold'>12. What are the components of Redux?</p>
                <p className='my-2'>
                    <li>Store: Holds the state of the application.</li>
                    <li>Action: The source information for the store.</li>
                    <li>Reducer: Specifies how the application's state changes in response to actions sent to the store.</li>
                </p>
            </div>

            <div className="grid text-justify m-3 p-3 rounded bg-primary text-primary-content place-content-center">
                <p className='text-center text-2xl font-bold'>13. What is the Flux?</p>
                <p className='my-2'>Flux is the application architecture that Facebook uses for building web applications. It is a method of handling complex data inside a client-side application and manages how data flows in a React application.</p>
            </div>

            <div className="grid text-justify m-3 p-3 rounded bg-accent text-accent-content place-content-center">
                <p className='text-center text-2xl font-bold'>14. What is React Router?</p>
                <p className='my-2'>React Router is a routing library built on top of React, which is used to create routes in a React application. This is one of the most frequently asked react interview questions.</p>
            </div>

            <div className="grid text-justify m-3 p-3 rounded bg-secondary text-secondary-content place-content-center">
                <p className='text-center text-2xl font-bold'>15. Why do we need to React Router?</p>
                <p className='my-2'>
                    <li>It maintains consistent structure and behavior and is used to develop single-page web applications.</li>
                    <li>Enables multiple views in a single application by defining multiple routes in the React application.</li>
                </p>
            </div>


        </div>
    );
};

export default FAQ;