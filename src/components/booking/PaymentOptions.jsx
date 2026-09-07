import { useState } from "react";
import Icon from "../common/Icon";
import "./PaymentOptions.css";

const options = [
  { id: "card", icon: "wallet", title: "Credit / Debit Card", desc: "Visa, Mastercard, RuPay & more" },
  { id: "upi", icon: "bolt", title: "UPI", desc: "Pay instantly via any UPI app" },
  { id: "netbanking", icon: "shield", title: "Net Banking", desc: "All major Indian banks" },
  { id: "wallet", icon: "gift", title: "Voyora Wallet", desc: "Use your saved balance & rewards" },
];

export default function PaymentOptions({ selected, onSelect }) {
  return (
    <div>
      <div className="payment-options">
        {options.map((o) => (
          <div
            key={o.id}
            className={`payment-option ${selected === o.id ? "selected" : ""}`}
            onClick={() => onSelect(o.id)}
          >
            <span className="icon-circle"><Icon name={o.icon} size={17} /></span>
            <div>
              <h4>{o.title}</h4>
              <p>{o.desc}</p>
            </div>
            <span className="radio" />
          </div>
        ))}
      </div>
      <p className="payment-note">
        <Icon name="shield" size={13} /> This is a frontend prototype — no real payment gateway is connected and no charge will occur.
      </p>
    </div>
    //
  );
}
