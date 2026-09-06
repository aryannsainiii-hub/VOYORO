import { useRouter } from "../../context/RouterContext";
import Icon from "../common/Icon";
import "./Footer.css";

export default function Footer() {
  const { navigate } = useRouter();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              <svg viewBox="0 0 64 64" fill="none">
                <path d="M32 6 L56 32 L44 32 L32 54 L20 32 L8 32 Z" fill="var(--gold)" />
              </svg>
              <span className="brand-name">Voyora</span>
            </div>
            <p className="footer-tagline">
              Travel Beyond Boundaries. One journey, every possibility —
              flights, trains, buses, cabs and ferries in a single place.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Company</h4>
              <a href="/explore" onClick={(e) => { e.preventDefault(); navigate("/explore"); }}>Explore</a>
              <a href="/rewards" onClick={(e) => { e.preventDefault(); navigate("/rewards"); }}>Rewards</a>
              <a href="/support" onClick={(e) => { e.preventDefault(); navigate("/support"); }}>Support</a>
            </div>
            <div className="footer-col">
              <h4>Account</h4>
              <a href="/my-bookings" onClick={(e) => { e.preventDefault(); navigate("/my-bookings"); }}>My Bookings</a>
              <a href="/profile" onClick={(e) => { e.preventDefault(); navigate("/profile"); }}>Profile</a>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <a href="#" onClick={(e) => e.preventDefault()}>Privacy</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Terms</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Help</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Voyora. All rights reserved.</span>
          <div className="footer-socials">
            <a href="#" onClick={(e) => e.preventDefault()} aria-label="Instagram"><Icon name="globe" size={15} /></a>
            <a href="#" onClick={(e) => e.preventDefault()} aria-label="X"><Icon name="bolt" size={15} /></a>
            <a href="#" onClick={(e) => e.preventDefault()} aria-label="Facebook"><Icon name="compass" size={15} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
