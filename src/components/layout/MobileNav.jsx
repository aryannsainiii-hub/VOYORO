import Icon from "../common/Icon";
import "./MobileNav.css";

export default function MobileNav({ links, activePath, onNavigate, onClose }) {
  return (
    <div className="mobile-nav-overlay" onClick={onClose}>
      <div className="mobile-nav-panel" onClick={(e) => e.stopPropagation()}>
        <div className="mobile-nav-header">
          <span className="brand-name">Menu</span>
          <button className="icon-btn" onClick={onClose} aria-label="Close menu">
            <Icon name="close" size={18} />
          </button>
        </div>
        {links.map((l) => (
          <a
            key={l.path}
            href={l.path}
            className={`mobile-nav-link ${activePath === l.path ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(l.path);
            }}
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}
