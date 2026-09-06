import { useMemo, useState } from "react";
import { useRouter } from "../context/RouterContext";
import { useBooking } from "../context/BookingContext";
import { generateJourneys, sortJourneys } from "../data/journeys";
import ResultsHeader from "../components/results/ResultsHeader";
import FilterBar from "../components/results/FilterBar";
import JourneyCard from "../components/results/JourneyCard";
import Button from "../components/common/Button";
import "./ResultsPage.css";

export default function ResultsPage() {
  const { query, navigate } = useRouter();
  const { setSelectedJourney } = useBooking();

  const search = {
    transport: query.transport || "flights",
    from: query.from || "New Delhi (DEL)",
    to: query.to || "Goa (GOI)",
    date: query.date || "2026-10-12",
    travellers: query.travellers || "1",
  };

  const [activeFilter, setActiveFilter] = useState(search.transport);
  const [sortId, setSortId] = useState("best-value");

  const transportsToShow =
    activeFilter === "all"
      ? ["flights", "trains", "buses", "cabs", "ferries"]
      : [activeFilter];

  const journeys = useMemo(() => {
    const all = transportsToShow.flatMap((t) =>
      generateJourneys({ ...search, transport: t, travellers: Number(search.travellers) })
    );
    return sortJourneys(all, sortId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilter, sortId, search.from, search.to, search.date, search.travellers]);

  const handleView = (journey) => {
    setSelectedJourney(journey);
    navigate("/journey", { id: journey.id });
  };

  return (
    <>
      <ResultsHeader search={search} onEdit={() => navigate("/")} />
      <div className="container">
        <FilterBar
          activeFilter={activeFilter}
          onFilter={setActiveFilter}
          sortId={sortId}
          onSort={setSortId}
        />

        {journeys.length === 0 ? (
          <div className="results-empty">
            <h3>No journeys found</h3>
            <p>Try adjusting your filters or search again.</p>
            <div style={{ marginTop: 16 }}>
              <Button variant="secondary" onClick={() => navigate("/")}>Back to Home</Button>
            </div>
          </div>
        ) : (
          <div style={{ paddingBottom: 48 }}>
            {journeys.map((j) => (
              <JourneyCard key={j.id} journey={j} onView={handleView} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
