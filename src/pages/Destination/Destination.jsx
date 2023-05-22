import { useState } from 'react';
import DestinationDesc from '../../components/destinationDesc/DestinationDesc';
import './destination.scss';
import { destinations } from '../../data/data.json';
import { motion } from 'framer-motion';

const Destination = () => {
  const [currentDestination, setCurrentDestination] = useState(0);
  return (
    <main className="destination">
      <section className="destination__content">
        <section className="destination__gallery">
          <h5 className="destination__sub-heading">
            <span className="destination__number">01</span>Pick your destination
          </h5>
          <motion.img
            key={currentDestination}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={`/destination/image-${destinations[currentDestination].name.toLowerCase()}.png`}
            alt="destination image"
            className="destination__img"
          />
        </section>
        <DestinationDesc
          currentDestination={currentDestination}
          setCurrentDestination={setCurrentDestination}
          destinations={destinations}
        />
      </section>
    </main>
  );
};

export default Destination;
