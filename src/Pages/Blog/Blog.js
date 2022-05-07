import React from 'react';
import Helmeted from '../Helmet/Helmet';

const Blog = () => {
    return (
        <div>
            <Helmeted title={"Blog"}></Helmeted>
            <div className="questionAndAnswer backGroundSection">
                <h2 className="text-center text-4xl my-10  questionTitle" data-aos="fade-down">Question And Answer</h2>
                <div className="grid grid-cols-2 gap-20 mx-10 questonsAndAnswer container">
                    <div className="bg-white p-10 " data-aos="fade-right">
                        <div className="card blogCard">
                            <div className="card-body" >
                                <h5 className="card-title text-center mb-3 text-xl">Q1: Authentication VS Authorization</h5>
                                <div className="compare">
                                    <div className="authentication">
                                        <h6>Authentication</h6>
                                        <p>Authentication verifies who the user is.</p>
                                        <p>At first verify Authentication Who are you.</p>
                                        <p>	It needs usually user’s login details.</p>
                                    </div>
                                    <div className="authorization">
                                        <h6>Authorization</h6>
                                        <p>Authorization determines what resources a user can access.</p>
                                        <p>Authorization check what permission do you have.</p>
                                        <p>While it needs user’s privilege or security levels.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-10 " data-aos="fade-left">
                        <div className="card blogCard">
                            <div className="card-body">
                                <h5 className="card-title text-center mb-3 text-xl">Q2: Why Use Firebase for alternative and Firebase alternative for Authentication</h5>
                                <h6>Why Use Firebase Authentication</h6>
                                <p className="card-text">
                                    Firebase Authentication is fully secure for authentication systems easy. while improving the sign-in experience for end users.  It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more.
                                </p>
                                <h6>Firebase alternative for Authentication</h6>
                                <li>Auth0</li>
                                <li>Okta</li>
                                <li>Keycloak</li>
                                and more
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-10">
                        <div className="card blogCard">
                            <div className="card-body">
                                <h5 className="card-title text-center mb-3 text-xl">Q3: what other service does firebase provide other then authentication</h5>
                                <h6>There are many services which Firebase provides, Most useful of them are:</h6>
                                <p className="card-text">
                                    <li>Cloud Firestore</li>
                                    <li>Cloud Functions</li>
                                    <li>Hosting</li>
                                    <li>Cloud Storage</li>
                                    <li>Google Analytics</li>
                                    <li>Predictions</li>
                                    <li>GCloud Messaging</li>
                                    <li>Dynamic Links</li>
                                    <li>Remote Config</li>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;