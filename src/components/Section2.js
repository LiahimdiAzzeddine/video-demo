import React from 'react';
import yomi_games from "../yomi_games.png";
import yalo from "../yolo.svg";
import Tastypill from "../Tastypill.png";
import omni from "../omni.png";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';


const Section2 = () => {
  return (
    <div className="footer text-white p-4">
      <div className="w-2/5 mx-auto mb-4 text-center">
        <h2 className="text-[2.5rem] mb-4">Partners</h2>
        <div className="flex flex-row justify-around">
          {/** 
          <div><img className='partnert hover:text-[#42bba8]' src={yomi_games} alt="Yomi Games" /></div>*/}
          <div><img className='partnert hover:text-[#42bba8]' src={yalo} alt="Yalo" /></div>
          <div><img className='partnert hover:text-[#42bba8]' src={Tastypill} alt="Tastypill" /></div>
          <div><img className='partnert hover:text-[#42bba8]' src={omni} alt="Omni" /></div>
        </div>
      </div>
      <div className="w-1/3 mx-auto text-center">
        <h2 className="text-[2.5rem] mb-4">Contact</h2>
        <div className="flex flex-row-reverse justify-around">
          <div className="flex items-center mb-2 hover:text-[#42bba8]">
            <FaMapMarkerAlt size={16} className="mr-2" />
            <a href="https://maps.app.goo.gl/fz2SZ19aguAHfc7K8" target="_blank" rel="noopener noreferrer">
              <span className='text-[1.2rem]'>Technopar, Ave Mohammed V, Tangier 90000</span>
            </a>
          </div>
          <div className="flex items-center mb-2 hover:text-[#42bba8]">
            <FaEnvelope size={16} className="mr-2" />
            <a href="mailto:contact@dinomite.com">
              <span className='text-[1.2rem]'>contact@dinomite.com</span>
            </a>
          </div>
          <div className="flex items-center mb-2 hover:text-[#42bba8]">
            <FaPhone size={16} className="mr-2" />
            <a href="tel:+33123456789">
              <span className='text-[1.2rem]'>+212808526154</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
