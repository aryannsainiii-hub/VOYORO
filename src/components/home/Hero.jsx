import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1800&q=80"
          alt=""
        />
        <div className="hero-scrim" />
      </div>

      <div className="container hero-content">
        <h1>One Journey.<br />Every Possibility.</h1>
        <p className="sub">
          Flights, trains, buses, cabs and ferries — all in one place.
          Travel without limits. Plan, compare and explore every way to
          reach your destination.
        </p>
      </div>

      <span className="hero-note">More than a trip — it's a lifestyle</span>
    </section>
  );
}
