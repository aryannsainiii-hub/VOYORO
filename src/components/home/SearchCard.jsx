import { useState } from "react";
import { transportTypes } from "../../data/transportTypes";
import { cities } from "../../data/cities";
import { useBooking } from "../../context/BookingContext";
import { useRouter } from "../../context/RouterContext";
import Icon from "../common/Icon";
import Button from "../common/Button";
import "./SearchCard.css";

export default function SearchCard() {
  const { search, setSearch } = useBooking();
  const { navigate } = useRouter();
  const [transport, setTransport] = useState(search.transport);
  const [from, setFrom] = useState(search.from);
  const [to, setTo] = useState(search.to);
  const [date, setDate] = useState(search.date);
  const [travellers, setTravellers] = useState(search.travellers);
  const [showTravellers, setShowTravellers] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = { transport, from, to, date, travellers };
    setSearch(next);
    navigate("/results", {
      transport,
      from,
      to,
      date,
      travellers: String(travellers),
    });
  };

  return (
    <div className="container search-card-wrap">
      <form className="search-card glass" onSubmit={handleSubmit}>
        <div className="transport-tabs">
          {transportTypes.map((t) => (
            <button
              type="button"
              key={t.id}
              className={`transport-tab ${transport === t.id ? "active" : ""}`}
              onClick={() => setTransport(t.id)}
            >
              <Icon name={t.icon} size={16} />
              {t.label}
            </button>
          ))}
        </div>

        <div className="search-fields">
          <label className="field">
            <span><Icon name="pin" size={13} /> From</span>
            <input
              list="voyora-cities"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="New Delhi (DEL)"
              required
            />
          </label>

          <label className="field">
            <span><Icon name="pin" size={13} /> To</span>
            <input
              list="voyora-cities"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Goa (GOI)"
              required
            />
          </label>

          <datalist id="voyora-cities">
            {cities.map((c) => (
              <option key={c.code} value={`${c.name} (${c.code})`} />
            ))}
          </datalist>

          <label className="field">
            <span><Icon name="calendar" size={13} /> Date</span>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>

          <div
            className="field travellers-field"
            onClick={() => setShowTravellers((s) => !s)}
          >
            <span><Icon name="users" size={13} /> Travellers</span>
            <input readOnly value={`${travellers} ${travellers === 1 ? "Adult" : "Adults"}`} />
            {showTravellers && (
              <div className="travellers-popover" onClick={(e) => e.stopPropagation()}>
                <span>Adults</span>
                <div className="stepper">
                  <button
                    type="button"
                    onClick={() => setTravellers((n) => Math.max(1, n - 1))}
                  >
                    −
                  </button>
                  <span>{travellers}</span>
                  <button
                    type="button"
                    onClick={() => setTravellers((n) => Math.min(9, n + 1))}
                  >
                    +
                  </button>
                </div>
              </div>
            )}
          </div>

          <Button type="submit" className="search-submit">
            Explore Journeys <Icon name="arrowRight" size={16} />
          </Button>
        </div>
      </form>
    </div>
  );
}
