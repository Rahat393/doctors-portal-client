import React from 'react';
import img from '../../../assets/images/chair.png'
import bimg from '../../../assets/images/bg.png'

import './Banner.css'

const Banner = () => {
    return (
        <div className="hero my-12 " style={{ backgroundImage: `url(${bimg})` }}>
            <div className="hero-content p-12 flex-col lg:flex-row-reverse"  >
                <img src={img} alt='' className="max-w-md rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6 lg:w-2/3">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;