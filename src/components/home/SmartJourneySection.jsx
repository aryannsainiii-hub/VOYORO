import Icon from "../common/Icon";
import Button from "../common/Button";
import "./SmartJourneySection.css";

const benefits = [
  { icon: "tag", title: "Best Price", desc: "Get the most value" },
  { icon: "clock", title: "Shortest Time", desc: "Reach faster" },
  { icon: "leaf", title: "Lowest Carbon", desc: "Greener travel" },
  { icon: "star", title: "Top Rated", desc: "Trusted & safe" },
  { icon: "shield", title: "Your Comfort", desc: "Personalised for you" },
];

const nodes = [
  [60, 40], [140, 30], [210, 90], [60, 160], [180, 180], [110, 110],
];

export default function SmartJourneySection() {
  return (
    <section className="section">
      <div className="container">
        <div className="smart-journey">
          <div className="sj-text">
            <h2>Smart Journeys, Tailored for You</h2>
            <p>
              Let our AI find the best route, price and experience based on
              your preferences.
            </p>

            <div className="sj-benefits">
              {benefits.map((b) => (
                <div className="sj-benefit" key={b.title}>
                  <div className="sj-benefit-icon">
                    <Icon name={b.icon} size={18} />
                  </div>
                  <h4>{b.title}</h4>
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>

            <Button variant="primary">
              Find Your Perfect Journey <Icon name="arrowRight" size={16} />
            </Button>
          </div>

          <div className="sj-globe">
            <span className="sj-badge"><Icon name="bolt" size={12} /> AI Recommended · 92% Match</span>
            <svg viewBox="0 0 240 240">
              <circle cx="120" cy="120" r="95" fill="none" stroke="var(--border)" />
              <circle cx="120" cy="120" r="60" fill="none" stroke="var(--border)" />
              <path className="route" d="M60,40 Q120,10 140,30 T210,90" />
              <path className="route" d="M60,40 Q40,110 60,160" />
              <path className="route" d="M60,160 Q120,200 180,180" />
              <path className="route" d="M180,180 Q220,140 210,90" />
              <path className="route" d="M110,110 Q150,100 180,180" />
              {nodes.map(([x, y], i) => (
                <circle className="node" key={i} cx={x} cy={y} r={i === 5 ? 6 : 4.5} />
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
