import { useEffect, useState } from 'react';
import './technology.scss';
import { technology } from '../../data/data.json';

const Technology = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const photo = windowWidth > 1150 ? 'portrait' : 'landscape';

  useEffect(() => {
    const setWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', setWidth);

    return () => window.removeEventListener('resize', setWidth);
  }, []);

  console.log(technology);
  return (
    <main className="technology">
      <section className="technology__content">
        <h5 className="technology__header">
          <span className="technology__number">03</span>SPACE LAUNCH 101
        </h5>
        <section className="technology__info">
          <section className="technology__buttons">
            {Array(3)
              .fill(null)
              .map((item, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className="technology__button"
                  style={{
                    background: i === currentImage ? 'var(--clr-white)' : 'transparent',
                    color: i === currentImage ? 'var(--clr-dark)' : 'var(--clr-white)',
                  }}
                >
                  {i}
                </button>
              ))}
          </section>
          <section className="technology__text-content">
            <h6 className="technology__sub-header">THE TERMINOLOGY…</h6>
            <h3 className="technology__name">{technology[currentImage].name}</h3>
            <p className="technology__desc">{technology[currentImage].description}</p>
          </section>
        </section>
      </section>
      <section className="technology__gallery">
        <img
          src={`/technology/image-${technology[currentImage].name
            .toLowerCase()
            .split(' ')
            .join('-')}-${photo}.jpg`}
          alt="rocket image"
          className="technology__image"
        />
      </section>
    </main>
  );
};

export default Technology;
