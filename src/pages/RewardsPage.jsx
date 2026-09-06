import { currentUser } from "../data/user";
import Icon from "../components/common/Icon";
import "./RewardsPage.css";

const perks = [
  { icon: "tag", title: "Member Discounts", desc: "Up to 15% off flights and premium cabs." },
  { icon: "bolt", title: "Priority Support", desc: "Skip the queue with dedicated Gold support." },
  { icon: "gift", title: "Bonus Miles", desc: "Earn 2x miles on every booking this month." },
];

export default function RewardsPage() {
  const { milesEarned } = currentUser.stats;
  const progress = Math.min(100, (milesEarned % 50000) / 500);

  return (
    <div className="container rewards-page">
      <div className="rewards-banner">
        <div>
          <h2>{currentUser.tier}</h2>
          <p>Keep travelling to unlock Platinum status.</p>
          <div className="rewards-progress">
            <div className="rewards-progress-bar" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div className="points">{milesEarned.toLocaleString("en-IN")} mi</div>
      </div>

      <div className="perks-grid">
        {perks.map((p) => (
          <div className="perk-card" key={p.title}>
            <span className="icon-circle"><Icon name={p.icon} size={17} /></span>
            <h4>{p.title}</h4>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
