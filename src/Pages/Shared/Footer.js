import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png';

const Footer = () => {
  return (
    <footer style={{
      background: `url(${footer})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }} className="px-10 py-16">
      <div className='footer justify-between container mx-auto'>
        <div>
          <h3 className="footer-title">Services</h3>
          <Link to="/" className="link link-hover">Emergency Checkup</Link>
          <Link to="/" className="link link-hover">Monthly Checkup</Link>
          <Link to="/" className="link link-hover">Weekly Checkup</Link>
          <Link to="/" className="link link-hover">Deep Checkup</Link>
        </div>
        <div>
          <h3 className="footer-title">Oral health</h3>
          <Link to="/" className="link link-hover">Fluoride Treatment</Link>
          <Link to="/" className="link link-hover">Cavity Filling</Link>
          <Link to="/" className="link link-hover">Teath Whitening</Link>
        </div>
        <div>
          <h3 className="footer-title">Address</h3>
          <p>New York - 101010 Hudson</p>
        </div>
      </div>
      <div className='my-10 text-center'>
        <p>Copyright © 2022 - Dcotors Portal Ltd</p>
      </div>
    </footer>
  );
};


export default Footer;