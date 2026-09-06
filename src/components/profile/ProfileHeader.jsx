import Icon from "../common/Icon";
import "./ProfileHeader.css";

export default function ProfileHeader({ user }) {
  return (
    <div className="profile-header">
      <img src={user.avatar} alt="" />
      <div>
        <h2>{user.name}</h2>
        <p className="email">{user.email} · Member since {user.memberSince}</p>
        <span className="profile-tier"><Icon name="star" size={13} /> {user.tier}</span>
      </div>
    </div>
  );
}
