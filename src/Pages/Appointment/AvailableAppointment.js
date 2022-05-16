import { format } from 'date-fns/esm';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServices(data));
  }, [])

  return (
    <>
      <section className='px-10 py-12'>
        <h4 className='text-center text-secondary font-bold mb-12'>Available Appointments on  {format(date, 'PP')}</h4>
        <div className="container mx-auto">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}></Service>)}
          </div>
        </div>
        {treatment && <BookingModal treatment={treatment}
          setTreatment={setTreatment} date={date}></BookingModal>}
      </section>
    </>
  );
};

export default AvailableAppointment;