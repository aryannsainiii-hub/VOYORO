import Icon from "../common/Icon";
import Button from "../common/Button";
import { formatDate } from "../../utils/duration";
import "./ResultsHeader.css";

export default function ResultsHeader({ search, onEdit }) {
  return (
    <div className="results-header">
      <div className="container">
        <div className="results-route">
          <span>{search.from}</span>
          <span className="arrow"><Icon name="arrowRight" size={20} /></span>
          <span>{search.to}</span>
        </div>
        <div className="results-meta">
          <span><Icon name="calendar" size={14} /> {formatDate(search.date)}</span>
          <span><Icon name="users" size={14} /> {search.travellers} {search.travellers === "1" || search.travellers === 1 ? "Traveller" : "Travellers"}</span>
        </div>
        <Button variant="ghost" size="sm" className="edit-search-btn" onClick={onEdit}>
          <Icon name="edit" size={14} /> Edit Search
        </Button>
      </div>
    </div>
  );
}
