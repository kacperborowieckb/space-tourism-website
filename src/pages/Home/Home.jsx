import './home.scss';

const Home = () => {
  return (
    <main className="home">
      <section className="home__content">
        <article className="home__text-content">
          <h5 className="home__sub-heading">SO, YOU WANT TO TRAVEL TO</h5>
          <h1 className="home__main-heading">SPACE</h1>
          <p className="home__desc">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you
            a truly out of this world experience!
          </p>
        </article>
        <section className="home__button-container">
          <button className="home__button">EXPLORE</button>
        </section>
      </section>
    </main>
  );
};

export default Home;
