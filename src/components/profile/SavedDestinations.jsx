import Icon from "../common/Icon";
import "./SavedDestinations.css";

export default function SavedDestinations({ destinations }) {
  return (
    <div className="saved-dest-grid">
      {destinations.map((d) => (
        <div className="saved-dest-card" key={d.id}>
          <img src={d.image} alt="" />
          <div className="scrim" />
          <span className="name"><Icon name="pin" size={13} /> {d.name}</span>
        </div>
      ))}
    </div>
  );
}
