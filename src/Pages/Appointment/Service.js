import React from 'react';

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="card-title text-secondary font-bold">{name}</h2>
        <p>{
          slots.length > 0
            ? <span>{slots[0]}</span>
            : <span className='text-red'>No slots available today</span>
        }</p>
        <p>{slots.length} {slots.length > 1 ? 'sapces' : 'sapce'} available</p>
        <div className="card-actions mt-6 justify-center">
          <label
            htmlFor="booking-modal"
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            className="btn btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
          >Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default Service;