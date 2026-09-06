import Icon from "../common/Icon";
import Button from "../common/Button";
import "./CTABanner.css";

const stats = [
  { icon: "users", value: "10M+", label: "Happy Travellers" },
  { icon: "compass", value: "50+", label: "Transport Partners" },
  { icon: "globe", value: "180+", label: "Countries & Cities" },
];

export default function CTABanner() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-banner">
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1600&q=80"
            alt=""
          />
          <div className="cta-banner-scrim" />
          <div className="cta-banner-content">
            <div>
              <h3>Your Next Journey Is Just a Click Away</h3>
              <p>
                Book flights, trains, buses, cabs, ferries and more — all in
                one place. Travel smarter, not harder.
              </p>
              <div style={{ marginTop: 18 }}>
                <Button variant="primary">
                  Get Started <Icon name="arrowRight" size={16} />
                </Button>
              </div>
            </div>

            <div className="cta-stats">
              {stats.map((s) => (
                <div className="cta-stat" key={s.label}>
                  <span className="cta-stat-icon"><Icon name={s.icon} size={16} /></span>
                  <div>
                    <b>{s.value}</b>
                    <span>{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
