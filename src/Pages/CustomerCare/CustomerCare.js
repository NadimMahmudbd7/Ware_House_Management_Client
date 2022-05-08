import React from 'react';
import ScrollToTop from 'react-scroll-to-top';

const CustomerCare = () => {
    return (
        
        <>
        <ScrollToTop smooth />
        <div data-aos="zoom-out">
            <h3 className='container my-4'>Seller Help Center</h3>
            <div className="helpField">
                <h3 className='text-center text-white fw-bold'>Hi, How Can We help?</h3>
                <div className="SearchField">
                <input className='helpInput' type="text" placeholder='Search for questions...'/>
                <ion-icon name="search-outline" style={{borderRadius:"0px", marginLeft:"0px", width:"75px", height:"23px",border:"2px solid rgb(128 128 128)"}}></ion-icon>
                </div>
            </div>
            <div className="topQuestion container mt-5">
                <h6 className='text-center'>Top Questions</h6>
                <div className="questions">
                <div className="leftQustion">
                    <li className='mt-3'>How to upload a single product on Seller Center?</li>
                    <li className='mt-3'>How do I fulfill my order?</li>
                    <li className='mt-3'>What should I do if I have received a damaged/wrong/missing item in my return package?</li>
                </div>
                <div className="middleQustion">
                    <li className='mt-3'>When will I get my payment?</li>
                    <li className='mt-3'>From where I can find out the drop off hour or break time of Walton Hubs?</li>
                    <li className='mt-3'>What is "Walton HOuse Live"?</li>
                </div>
                <div className="rightQuestion">
                    <li className='mt-3'>What is the Seller Picks feature and how can I use it?</li>
                    <li className='mt-3'>What are the reasons for claim rejection?</li>
                    <li className='mt-3'>What is the seller scorecard?</li>
                </div>
                </div>
            </div>
            <section>
            <h6 className='text-center mt-5'>Categories</h6>
            <div className="catagories container mt-4">
                <div className="perCatagories">
                <ion-icon style={{margin:"0px",backgroundColor:"#7d83c9",color:"white"}} name="megaphone-outline"></ion-icon>
                <h6 className='mt-2'>Announcements </h6>
                </div>
                <div className="perCatagories">
                <ion-icon style={{margin:"0px",backgroundColor:"#7d83c9",color:"white"}} name="book-outline"></ion-icon>
                <h6 className='mt-2'>Policies & Guidelines</h6>
                </div>
                <div className="perCatagories">
                <ion-icon style={{margin:"0px",backgroundColor:"#7d83c9",color:"white"}} name="bookmarks-outline"></ion-icon>
                <h6 className='mt-2'>Order Management</h6>
                </div>
                <div className="perCatagories">
                <ion-icon style={{margin:"0px",backgroundColor:"#7d83c9",color:"white"}} name="timer-outline"></ion-icon>
                <h6 className='mt-2'>Performance </h6>
                </div>
                <div className="perCatagories">
                <ion-icon style={{margin:"0px",backgroundColor:"#7d83c9",color:"white"}} name="cash-outline"></ion-icon>
                <h6 className='mt-2'>Payments</h6>
                </div>
                <div className="perCatagories">
                <ion-icon style={{margin:"0px",backgroundColor:"#7d83c9",color:"white"}} name="swap-horizontal-outline"></ion-icon>
                <h6 className='mt-2'>Returns & Claims</h6>
                </div>
                <div className="perCatagories">
                <ion-icon style={{margin:"0px",backgroundColor:"#7d83c9",color:"white"}} name="trending-up-outline"></ion-icon>
                <h6 className='mt-2'>Sell On Walton House</h6>
                </div>
                <div className="perCatagories">
                <ion-icon name="heart-half-outline" style={{backgroundColor:"#7d83c9",color:"white"}}></ion-icon>
                <h6 className='mt-2'>Seller-Buyer Commu.</h6>
                </div>
            </div>
            </section>
            {/* chat section */}
            <div className="chat">
            <h6 className='text-center mt-5 mb-4'>Still Need Help?</h6>
            <div className="chatSection">
                <div className="chatImage">
                <ion-icon name="chatbubbles-outline" style={{padding:"10px", fontSize:"30px", margin:"0px", borderRadius:"5px", backgroundColor:"#7d83c9",color:"white"}}></ion-icon>
                </div>
                <div className="chatText">
                    <h5>Chat Now</h5>
                    <small>10:00 am to 5:00 pm</small><br></br>
                    <small>(Saturday - Thursday)</small>
                </div>
            </div>
            </div>
        </div>
        </>
    );
};

export default CustomerCare;