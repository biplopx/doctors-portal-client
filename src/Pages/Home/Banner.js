import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse px-10">
          <img src={chair} className="max-w-sm shadow-2xl m-0" alt='chair' />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold uppercase">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;