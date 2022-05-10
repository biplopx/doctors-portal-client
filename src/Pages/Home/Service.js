import React from 'react';

const Service = ({ service }) => {
  const { name, img } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-lg">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" width="115px" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default Service;