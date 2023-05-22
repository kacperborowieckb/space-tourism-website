import './destinationDesc.scss';
import { motion } from 'framer-motion';

const DestinationNav = ({ currentDestination, setCurrentDestination, destinations }) => {
  return (
    <article className="destination-desc">
      <nav className="destination-desc__nav">
        <ul className="destination-desc__list">
          {destinations.map((destination, i) => (
            <li className="destination-desc__list-item" key={i}>
              <button
                className={`destination-desc__button ${
                  i === currentDestination ? 'destination-desc__button-active' : ''
                }`}
                onClick={() => setCurrentDestination(i)}
              >
                {destination.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <motion.section
        key={currentDestination}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="destination-desc__content"
      >
        <h2 className="destination-desc__heading">{destinations[currentDestination].name}</h2>
        <p className="destination-desc__description">
          {destinations[currentDestination].description}
        </p>
        <div className="destination-desc__line"></div>
        <section className="destination-desc__info-container">
          <section className="destination-desc__info">
            <h6 className="destination-desc__sub-heading">AVG. DISTANCE</h6>
            <h5 className="destination-desc__value">{destinations[currentDestination].distance}</h5>
          </section>
          <section className="destination-desc__info">
            <h6 className="destination-desc__sub-heading">Est. travel time</h6>
            <h5 className="destination-desc__value">{destinations[currentDestination].travel}</h5>
          </section>
        </section>
      </motion.section>
    </article>
  );
};

export default DestinationNav;
