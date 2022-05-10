import React from 'react';
import PrimaryBtn from '../Shared/PrimaryBtn';
import treatment from '../../assets/images/treatment.png';

const Dental = () => {
  return (
    <section className='py-20 px-10'>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row gap-20">
          <img src={treatment} width="458px" alt="treatment" />
          <div>
            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <PrimaryBtn>GET Started</PrimaryBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dental;