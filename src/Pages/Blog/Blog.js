import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import Helmeted from '../Helmet/Helmet';

const Blog = () => {
    return (
        <div>
            <ScrollToTop smooth />
            <Helmeted title={"Blog"}></Helmeted>
            <div className="questionAndAnswer backGroundSection">
                <h2 className="text-center text-4xl my-10  questionTitle" data-aos="fade-down">Question And Answer</h2>
                <div className="grid grid-cols-2 gap-20 mx-10 questonsAndAnswer container">
                    <div className="bg-white p-10 " data-aos="fade-right">
                        <div className="card blogCard">
                            <div className="card-body" >
                                <h5 className="card-title text-center mb-3 text-xl">Q1: Differences between sql and nosql databases ?</h5>
                                <div className="compare">
                                    <div className="authentication">
                                        <h6>SQL</h6>
                                        <p>SQL databases have fixed or static or predefined schema.</p>
                                        <p>SQL databases are vertically scalable.</p>
                                        <p>SQL databases are best suited for complex queries.</p>
                                    </div>
                                    <div className="authorization">
                                        <h6>NOSQL</h6>
                                        <p>NoSQL databases are horizontally scalable.</p>
                                        <p>NoSQL databases have dynamic schema.</p>
                                        <p>These databases are not so good for complex queries.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-10 " data-aos="zoom-out">
                        <div className="card blogCard">
                            <div className="card-body">
                                <h5 className="card-title text-center mb-3 text-xl">Q2: When should you use nodejs and when should you use mongodb ?</h5>
                                <p className="card-text">
                                MongoDB is the Document Oriented Database. MongoDB stores a lot of data in JSON format. MongoDB's performance is much faster than any RDBMS. MongoDB is designed to work with Large Scale Data.Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language .So, if i want to write some kind of stand-alone program or server in Javascript, then i can use nodejs for it. MongoDB- If my application needs the ability to persistently store data in a way that you can efficiently query or update it later, then i Use MongoDB or any Other Database If my application needs the ability to persistently store data in a way that you can efficiently query or update it later, then i Use MongoDB or any Other Database.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-10">
                    <div className="card blogCard">
                            <div className="card-body" >
                                <h5 className="card-title text-center mb-3 text-xl">Q3: Difference between javascript and nodejs ?</h5>
                                <div className="compare">
                                    <div className="authentication">
                                        <h6>Javascript</h6>
                                        <p>Javascript is capable enough to add HTML and play with the DOM.</p>
                                        <p>Javascript is used in frontend development.</p>
                                        <p>It is basically used on the client-side.</p>
                                    </div>
                                    <div className="authorization">
                                        <h6>NodeJS</h6>
                                        <p>It is mostly used on the server-side.</p>
                                        <p>Nodejs is used in server-side development.</p>
                                        <p>Nodejs does not have capability to add HTML tags.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;