import grid from "../assets/hero_grid.png";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__grid">
        <img src={grid} alt="Photo grid" />
      </div>
      <h1 className="hero__title">Online Experiences</h1>
      <p className="hero__text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
