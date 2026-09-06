import { destinations } from "../data/destinations";
import PopularDestinations from "../components/home/PopularDestinations";
import TransportCategoryCards from "../components/home/TransportCategoryCards";
import "./ExplorePage.css";

export default function ExplorePage() {
  return (
    <div className="explore-page">
      <div className="container">
        <div className="explore-hero">
          <h1>Explore every way to get there</h1>
          <p>
            Browse destinations, compare transport modes and find the journey
            that fits your style — from budget buses to premium flights.
          </p>
        </div>
      </div>
      <TransportCategoryCards />
      <PopularDestinations />
    </div>
  );
}
