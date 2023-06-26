import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import CaseStudies from './caseconflict';

import ControlledCarousel from '../components/MyCarousel';
function Casestudies() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <ControlledCarousel/>
  );
}

export default Casestudies;

