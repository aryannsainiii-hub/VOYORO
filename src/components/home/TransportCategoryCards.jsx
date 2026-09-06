import { transportTypes } from "../../data/transportTypes";
import { useBooking } from "../../context/BookingContext";
import { useRouter } from "../../context/RouterContext";
import Icon from "../common/Icon";
import "./TransportCategoryCards.css";

const ICON_COLORS = {
  flights: "#7c6cf0",
  trains: "#1fb086",
  buses: "#3b7bf6",
  cabs: "#39b06b",
  ferries: "#2aa7c9",
};

export default function TransportCategoryCards() {
  const { search, setSearch } = useBooking();
  const { navigate } = useRouter();

  const openCategory = (id) => {
    const next = { ...search, transport: id };
    setSearch(next);
    navigate("/results", { ...next, travellers: String(next.travellers) });
  };

  return (
    <section className="section">
      <div className="container">
        <div className="transport-grid">
          {transportTypes.map((t) => (
            <div key={t.id} className="transport-card">
              <div className="transport-card-media">
                <img src={t.image} alt="" />
                <div
                  className="transport-card-icon"
                  style={{ background: ICON_COLORS[t.id] }}
                >
                  <Icon name={t.icon} size={18} />
                </div>
              </div>
              <div className="transport-card-body">
                <h3>{t.label}</h3>
                <p>{t.tagline}</p>
                <button
                  className="transport-card-explore"
                  onClick={() => openCategory(t.id)}
                >
                  Explore <Icon name="arrowRight" size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
