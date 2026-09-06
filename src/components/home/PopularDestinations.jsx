import { destinations } from "../../data/destinations";
import Icon from "../common/Icon";
import "./PopularDestinations.css";

export default function PopularDestinations() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <h2>Popular Destinations</h2>
            <p>Explore the world's most loved places</p>
          </div>
          <a className="eyebrow-link" href="#" onClick={(e) => e.preventDefault()}>
            View All Destinations <Icon name="arrowRight" size={14} />
          </a>
        </div>

        <div className="dest-grid">
          {destinations.map((d) => (
            <div className="dest-card" key={d.id}>
              <img src={d.image} alt="" />
              <div className="dest-card-scrim" />
              <div className="dest-card-body">
                <h3>{d.name}</h3>
                <p>{d.description} <Icon name="arrowRight" size={12} /></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
