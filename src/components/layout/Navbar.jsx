import { useState } from "react";
import { useRouter } from "../../context/RouterContext";
import { currentUser } from "../../data/user";
import Icon from "../common/Icon";
import ThemeToggle from "../common/ThemeToggle";
import MobileNav from "./MobileNav";
import "./Navbar.css";

const LINKS = [
  { path: "/", label: "Home" },
  { path: "/explore", label: "Explore" },
  { path: "/my-bookings", label: "My Bookings" },
  { path: "/rewards", label: "Rewards" },
  { path: "/support", label: "Support" },
];

export default function Navbar() {
  const { path, navigate } = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a
          className="brand"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          <svg className="brand-mark" viewBox="0 0 64 64" fill="none">
            <path d="M32 6 L56 32 L44 32 L32 54 L20 32 L8 32 Z" fill="var(--gold)" />
          </svg>
          <span className="brand-name">Voyora</span>
        </a>

        <nav className="nav-links">
          {LINKS.map((l) => (
            <a
              key={l.path}
              href={l.path}
              className={`nav-link ${path === l.path ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                navigate(l.path);
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="icon-btn hide-mobile" aria-label="Search">
            <Icon name="search" size={17} />
          </button>
          <button className="icon-btn hide-mobile" aria-label="Notifications">
            <Icon name="bell" size={17} />
            <span className="dot" />
          </button>
          <button
            className="user-chip desktop-only hide-mobile"
            onClick={() => navigate("/profile")}
            aria-label="Open profile"
          >
            <img src={currentUser.avatar} alt="" />
            <span>Hello, {currentUser.name.split(" ")[0]}</span>
            <Icon name="chevronDown" size={14} />
          </button>
          <ThemeToggle />
          <button
            className="icon-btn mobile-only"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Icon name="menu" size={18} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <MobileNav
          links={LINKS}
          activePath={path}
          onNavigate={(p) => {
            navigate(p);
            setMobileOpen(false);
          }}
          onClose={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}
