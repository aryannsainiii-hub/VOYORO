import { useState } from "react";
import Icon from "../components/common/Icon";
import "./SupportPage.css";

const faqs = [
  { q: "Can I change my travel date after booking?", a: "Yes — in this prototype, cancel the booking from My Bookings and search again with a new date." },
  { q: "How do refunds work?", a: "Refunds are simulated for demo purposes; no real payment is ever charged." },
  { q: "Which cities does Voyora cover?", a: "Major Indian cities plus popular international destinations like Dubai, Bali, Switzerland and Paris." },
  { q: "Is my data safe?", a: "This is a frontend-only demo. Bookings are stored locally in your browser and never leave your device." },
];

export default function SupportPage() {
  const [open, setOpen] = useState(0);

  return (
    <div className="container support-page">
      <div className="section-head">
        <div>
          <h2>Support</h2>
          <p>Answers to common questions about Voyora</p>
        </div>
      </div>

      {faqs.map((f, i) => (
        <div className="faq-item" key={f.q} onClick={() => setOpen(open === i ? -1 : i)}>
          <div className="faq-question">
            {f.q}
            <Icon name="chevronDown" size={16} style={{ transform: open === i ? "rotate(180deg)" : "none" }} />
          </div>
          {open === i && <p className="faq-answer">{f.a}</p>}
        </div>
      ))}

      <div className="support-contact">
        <div className="support-contact-card">
          <span className="icon-circle"><Icon name="help" size={17} /></span>
          <h4>Help Centre</h4>
          <p>Browse guides & FAQs</p>
        </div>
        <div className="support-contact-card">
          <span className="icon-circle"><Icon name="bell" size={17} /></span>
          <h4>Live Chat</h4>
          <p>Mon–Sun, 24×7</p>
        </div>
        <div className="support-contact-card">
          <span className="icon-circle"><Icon name="shield" size={17} /></span>
          <h4>Trust & Safety</h4>
          <p>Your journeys, protected</p>
        </div>
      </div>
    </div>
  );
}
