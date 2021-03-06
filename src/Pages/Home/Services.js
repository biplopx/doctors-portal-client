import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
  const services = [
    {
      _id: 1,
      name: 'Fluoride Treatment',
      description: '',
      img: fluoride
    },
    {
      _id: 2,
      name: 'Cavity Filling',
      description: '',
      img: cavity
    },
    {
      _id: 3,
      name: 'Teeth Whitening',
      description: '',
      img: whitening
    },
  ];
  return (
    <section className='p-10'>
      <div className="container mx-auto">
        <h3 className='text-center text-primary font-bold uppercase mb-4'>Our Services</h3>
        <h2 className='text-center text-4xl font-bold mb-5'>Services We Provide</h2>
        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4'>
          {
            services.map(service => <Service key={service._id} service={service}></Service>)
          }
        </div>

      </div>
    </section>
  );
};

export default Services;