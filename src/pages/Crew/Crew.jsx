import './crew.scss';
import { crew } from '../../data/data.json';
import { useState } from 'react';

const Crew = () => {
  const [currentMember, setCurrentMember] = useState(0);

  return (
    <main className="crew">
      <section className="crew__desc">
        <h5 className="crew__heading">
          <span className="crew__number">02</span>Meet your crew
        </h5>
        <section className="crew__text-content">
          <h4 className="crew__role">{crew[currentMember].role}</h4>
          <h3 className="crew__name">{crew[currentMember].name}</h3>
          <p className="crew__bio">{crew[currentMember].bio}</p>
        </section>
        <section className="crew__buttons">
          {Array(4)
            .fill(null)
            .map((item, i) => (
              <button
                key={i}
                className="crew__button"
                onClick={() => setCurrentMember(i)}
                style={{ opacity: i === currentMember ? '1' : '' }}
              ></button>
            ))}
        </section>
      </section>
      <section className="crew__gallery">
        <img
          src={`/crew/image-${crew[currentMember].name.toLowerCase().split(' ').join('-')}.png`}
          alt="crew image"
          className="crew__image"
        />
      </section>
    </main>
  );
};

export default Crew;
