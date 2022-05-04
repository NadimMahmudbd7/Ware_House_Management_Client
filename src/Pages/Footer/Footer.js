import React from 'react';

const Footer = () => {
    return (
        <div className='totalFooter'>
            <div className='footer container'>
                <div className="leftSide">
                    <h3>Walton WereHouse</h3>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsam non recusandae. Sequi numquam, consequatur quis blanditiis rerum iusto culpa!</small>
                    <div className="icon">
                        <div className="icons">
                            <ion-icon name="logo-facebook"></ion-icon>
                            <ion-icon name="logo-twitter"></ion-icon>
                            <ion-icon name="logo-google"></ion-icon>
                            <ion-icon name="logo-google"></ion-icon>
                        </div>
                    </div>
                </div>
                <div className="middleSide">
                    <h4>CONTACT INFO</h4>
                    <ul>
                        <li>201 Liverpool Street, Suite 721, London</li>
                        <li>London, United Kingdom</li>
                        <li>youremail@yourdomain.com</li>
                        <li>+88 (0) 101 0000 000</li>
                    </ul>
                </div>
                <div className="rightSide">
                    <h3>USEFUL RESOURCES</h3>
                    <div className="resource">
                        <h4> <small className='news'>NewsLeter</small></h4>
                        <h4> <small className='aboutus'>About Us</small></h4>
                        <h4> <small className='terms'>Terms</small></h4>
                    </div>
                </div>
            </div>
            <hr className='mt-5' />
            <small className='text-center copyRight'>&copy; 2022 All Right Reserved</small>
        </div>
    );
};

export default Footer;