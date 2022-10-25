import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-1 lg:grid lg:grid-cols-2 gap-8'>
            <div className='border-2 rounded-lg p-4 bg-gray-800 text-white'>
                <div className='mb-4'>
                    1. What is CORS?
                </div>
                <div>
                    <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                </div>
            </div>

            <div className='border-2 rounded-lg p-4 bg-gray-800 text-white'>
                <div className='mb-4'>
                    2. Why we use FireBase? What are the alternatives of FireBase?
                </div>
                <div>
                    <p>Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps. Firebase provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment.
                    Alternatives of FireBase:
                    <ol>
                        <li>1. Oracle Database</li>
                        <li>2. Amazon Redshift</li>
                        <li>3. DataStax Enterprise</li>
                        <li>4. MongoDB</li>
                        <li>5. Db2</li>
                        <li>6. Couchbase Server</li>
                        <li>7. Cloudera Enterprise Data Hub</li>
                    </ol>
                    </p>
                </div>
            </div>

            <div className='border-2 rounded-lg p-4 bg-gray-800 text-white'>
                <div className='mb-4'>3. How does Private Route work?</div>
                <div>
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                </div>
            </div>

            <div className='border-2 rounded-lg p-4 bg-gray-800 text-white'>
                <div className='mb-4'>4.What is Node? How does it work?</div>
                <div>
                    <p>Javascript has existed since 1995 and has since taken over as the dominant language for web development. For much of its life, JavaScript was used mainly for client-side scripting inside  tags executing in web browsers. This limitation meant that developers were often working in many different languages and frameworks between the front-end (client-side) and backend (server-side) aspects of a web application.

                    Although there were other projects to bring JavaScript to server-side applications, the functionality took off with the launch of Node.js in 2009. Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.

                    Node.js is written in C, C++, and JavaScript, and it is built on the open-source V8 JavaScript engine which also powers JS in browsers such as Google Chrome. As V8 supports new features in JavaScript, they are incorporated into node.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;