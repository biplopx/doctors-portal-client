import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryBtn from '../Shared/PrimaryBtn';

const Contact = () => {
  return (
    <section style={{
      background: `url(${appointment}) no-repeat center center/cover`
    }} className="p-10">
      <div className='text-center pb-14 text-white'>
        <p className='text-xl font-bold bg-clip-text text-secondary'>
          Contact Us
        </p>
        <h1 className='text-4xl'>Stay connected with us</h1>
      </div>
      <div className='grid grid-cols-1 justify-items-center gap-5'>
        <input
          type='text'
          placeholder='Email Address'
          className='input w-full max-w-md'
        />
        <input
          type='text'
          placeholder='Subject'
          className='input w-full max-w-md'
        />
        <textarea
          className='textarea w-full max-w-md'
          placeholder='Your message'
          rows={6}
        ></textarea>
        <PrimaryBtn>Submit</PrimaryBtn>
      </div>
    </section>
  );
};

export default Contact;