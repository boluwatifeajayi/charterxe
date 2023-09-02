import React from 'react';
import logo from '../assets/images/footer-logo.png'
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#18254A] text-white py-16 px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Column 1: Logo */}
        <div className="mb-4 md:mb-0">
          <Image src={logo} alt="Logo"/>
        </div>

        {/* Column 2: Menu */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Menu</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Request Quote</a>
            </li>
            <li>
              <a href="#">Membership Form</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Connect */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Connect</h3>
          <ul>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="text-xl font-bold mb-2">Contact</h3>
          <p>Email: hello@charterxe.com</p>
          <p>Phone: +2349017391334</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
