import React from 'react';
import Socials from '../socials';

const Footer = () => (
  <footer className="flex w-full items-center justify-center flex-col bg-white pb-2" style={{ color: '#505f79' }}>
    <hr className="w-full border border-customLighterGray" style={{ borderColor: '#dfe1e6' }} />
    <Socials className="flex py-2 gap-4 text-xl" />
    <hr
      className="w-[50%] border-2 rounded-lg md:hidden"
      style={{ background: '#0d151e', borderColor: '#0d151e' }}
    />
  </footer>
);

export default Footer;
