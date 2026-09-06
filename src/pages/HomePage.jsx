import Hero from "../components/home/Hero";
import SearchCard from "../components/home/SearchCard";
import TransportCategoryCards from "../components/home/TransportCategoryCards";
import SmartJourneySection from "../components/home/SmartJourneySection";
import PopularDestinations from "../components/home/PopularDestinations";
import CTABanner from "../components/home/CTABanner";
//home page with hero, search, transport categories, smart journey, popular destinations and cta banner
export default function HomePage() {
  return (
    <>
      <Hero />
      <SearchCard />
      <TransportCategoryCards />
      <SmartJourneySection />
      <PopularDestinations />
      <CTABanner />
    </>
  );
}
