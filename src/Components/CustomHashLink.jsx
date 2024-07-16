// CustomHashLink.js
import React from 'react';
import { HashLink } from 'react-router-hash-link';

const scrollWithOffset = (el, offset) => {
  const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
  const yOffset = offset; // Use the passed offset
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

const CustomHashLink = ({ to, offset, children }) => {
  const handleScroll = (el) => {
    scrollWithOffset(el, offset);
  };

  return (
    <HashLink smooth to={to} scroll={handleScroll}>
      {children}
    </HashLink>
  );
};

export default CustomHashLink;
