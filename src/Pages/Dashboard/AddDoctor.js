import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/services').then(res => res.json()));

  // Image api
  const imageStorageKey = 'e91686f0aa8cbf7aa10ab969589f7d71';

  const onSubmit = async data => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img
          }
          // send to your database
          fetch('http://localhost:5000/doctor', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctor)
          })
            .then(res => res.json())
            .then(inserted => {
              if (inserted.insertedId) {
                toast.success('Doctor Added successfully')
                reset();
              }
              else {
                toast.error('Fail To add doctor')
              }
            })

        }
        console.log(result)
      })
  };
  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div className='p-5 flex justify-center'>
      <div className='w-80'>
        <h2 className='text-3xl'>Add Doctor</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full name */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: 'Name is required'
                }
              })}
            />
            <label className="label">
              {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
            </label>
          </div>
          {/* email */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", {
                required: {
                  value: true,
                  message: 'Email is Required'
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: 'Provide a valid Email'
                }
              })}
            />
            <label className="label">
              {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
              {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
            </label>
          </div>
          {/* specialty */}
          <div className="form-control w-full max-w-xs mb-4">
            <label className="label">
              <span className="label-text">Specialty</span>
            </label>
            <select {...register('specialty')} className="select input-bordered w-full max-w-xs">
              {
                services.map(service => <option
                  key={service._id}
                  value={service.name}
                >{service.name}</option>)
              }
            </select>
          </div>
          {/* PHoto upload */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Doctor Image</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full max-w-xs"
              {...register("image", {
                required: {
                  value: true,
                  message: 'Image is required'
                }
              })}
            />
            <label className="label">
              {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
            </label>
          </div>
          <input className='btn w-full max-w-xs text-white' type="submit" value="Add Doctor" />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;