import Icon from "../common/Icon";
import { sortOptions } from "../../data/journeys";
import "./FilterBar.css";

const filters = [
  { id: "all", label: "All", icon: "compass" },
  { id: "flights", label: "Flights", icon: "plane" },
  { id: "trains", label: "Trains", icon: "train" },
  { id: "buses", label: "Buses", icon: "bus" },
  { id: "cabs", label: "Cabs", icon: "cab" },
  { id: "ferries", label: "Ferries", icon: "ferry" },
];

export default function FilterBar({ activeFilter, onFilter, sortId, onSort }) {
  return (
    <div className="filter-sort-row">
      <div className="filter-pills">
        {filters.map((f) => (
          <button
            key={f.id}
            className={`filter-pill ${activeFilter === f.id ? "active" : ""}`}
            onClick={() => onFilter(f.id)}
          >
            <Icon name={f.icon} size={14} /> {f.label}
          </button>
        ))}
      </div>

      <label className="sort-select-wrap">
        <Icon name="filter" size={14} /> Sort by
        <select
          className="sort-select"
          value={sortId}
          onChange={(e) => onSort(e.target.value)}
        >
          {sortOptions.map((o) => (
            <option key={o.id} value={o.id}>{o.label}</option>
          ))}
        </select>
      </label>
    </div>
  );
}
