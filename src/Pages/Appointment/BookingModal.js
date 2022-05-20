import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.int';
import Loading from '../Shared/Loading';

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
  const [user, loading] = useAuthState(auth);
  const { _id, name, slots } = treatment;
  const formattedDate = format(date, 'pp');
  if (loading) {
    <Loading></Loading>
  }
  const handleBooking = event => {
    event.preventDefault();
    const slot = event.target.slot.value;

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.value
    }

    fetch('https://doctors-portal-mbh.herokuapp.com/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        // to close the modal
        console.log(data);
        if (data.success) {
          toast(`Appointment is set, ${formattedDate} at ${slot}`);
        }
        else {
          toast.error(`Already have and appointment, ${data.booking?.date} at ${data.booking?.slot}`)
        }
        refetch();
        setTreatment(null);
      });
  }

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
            <input type="text" value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-xs" />
            <select name="slot" className="select select-bordered w-full max-w-xs">
              {
                slots.map(slot => <option key={slot} value={slot}>{slot}</option>)
              }
            </select>
            <input type="text" name="name" value={user?.displayName} disabled className="input input-bordered w-full max-w-xs" />
            <input type="email" name="email" value={user?.email} disabled className="input input-bordered w-full max-w-xs" />
            <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
            <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs bg-gradient-to-r from-secondary to-primary" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;