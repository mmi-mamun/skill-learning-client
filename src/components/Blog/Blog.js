import React from 'react';
import Post from '../Post/Post';
import './Blog.css'

const Blog = () => {
    const blogPosts = [
        {
            title: "What is CORS?",

            firstPart: `Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. CORS is used to explicitly allow some cross-origin requests while rejecting others.`,

            secondPart: `CORS is implemented primarily in web browsers, but it can also be used in API clients as an option. It's present in all popular web browsers like Google Chrome, Firefox, Opera, and Safari. The standard has been accepted as a W3C Recommendation in January 2014. Based on that, we can assume that it is implemented in all currently available and other than listed web browsers.`,

            author: "Jakub Pomykała",
            imgUrl:
                "https://hindiguide.tech/wp-content/uploads/2021/06/CORS.jpg",
        },


        {
            title: "Why are you using firebase? What other options do you have to implement authentication? ",

            firstPart: `It’s easy to start a project with Firebase or add a Firebase to your project. It allows real-time database connection, which means multiple users can see the changes in the data when the data gets created or edited. Data transmission is handled with web sockets so you don’t have to send requests to get new data, you only need to subscribe once.

            The same applies for file storage. Quick setup authentication via the major providers (Google, Twitter, Facebook, GitHub). Https by default - secure http traffic without setting up certificates. Any static html/javascript content can be hosted.`,

            secondPart: `Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
            
            We can achieve authentication by various ways such as  Cookie-Based authentication, Token-Based authentication, Third party access(OAuth, API-token), OpenId and SAML`,
            author: "Vivek Madurai",
            imgUrl:
                "https://swoopnow.com/wp-content/uploads/2020/07/User-Authentication_-Understanding-the-Basics-Top-Tips.jpg",
        },

        {
            title: "How does private route work?",

            firstPart: `The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).`,

            secondPart: `When there is a logged in user, the Home component does not run into the if-else condition's block and renders the actual content of the Home component instead. However, if there is no logged in user, the Home component renders React Router's Navigate component and therefore redirects a user to the Landing page. In the case of a user being on the Home page and logging out by clicking the button, the user will experience a redirect from the protected page.`,
            author: "Nilanth",
            imgUrl:
                "https://i.ytimg.com/vi/M6iYyo25QZo/mqdefault.jpg",
        },

        {
            title: "What is node? How does node work?",
            firstPart: `Node is completely event-driven. Node.js is designed to build scalable network applications. Node.js is written in C, C++, and JavaScript, and it is built on the open-source V8 JavaScript engine which also powers JS in browsers such as Google Chrome. As V8 supports new features in JavaScript, they are incorporated into Node.`,

            secondPart: `A new request coming in is one kind of event. The server starts processing it and when there is a blocking IO operation, it does not wait until it completes and instead registers a callback function. The server then immediately starts to process another event (maybe another request). When the IO operation is finished, that is another kind of event, and the server will process it (i.e. continue working on the request) by executing the callback as soon as it has time.

            So the server never needs to create additional threads or switch between threads, which means it has very little overhead. If you want to make full use of multiple hardware cores, you just start multiple instances of node.js`,
            author: "Michael Borgwardt",
            imgUrl:
                "https://miro.medium.com/max/640/1*xsQYYYvG-07C3lAYcTvuRA.png",
        }
    ];

    return (
        <div className="posts-container">
            {blogPosts.map(post =>
                <Post key={post.title} post={post} />
            )}
        </div>
    );
};

export default Blog;