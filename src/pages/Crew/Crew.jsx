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
        <h4 className="crew__role">{crew[currentMember].role}</h4>
        <h3 className="crew__name">{crew[currentMember].name}</h3>
        <p className="crew__bio">{crew[currentMember].bio}</p>
        <section className="crew__buttons">
          <button className="crew__button" onClick={() => setCurrentMember(0)}></button>
          <button className="crew__button" onClick={() => setCurrentMember(1)}></button>
          <button className="crew__button" onClick={() => setCurrentMember(2)}></button>
          <button className="crew__button" onClick={() => setCurrentMember(3)}></button>
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
