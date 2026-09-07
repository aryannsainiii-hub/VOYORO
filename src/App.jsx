import { ThemeProvider } from "./context/ThemeContext";
import { RouterProvider, useRouter } from "./context/RouterContext";
import { BookingProvider } from "./context/BookingContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import JourneyDetailsPage from "./pages/JourneyDetailsPage";
import BookingPage from "./pages/BookingPage";
import MyBookingsPage from "./pages/MyBookingsPage";
import ProfilePage from "./pages/ProfilePage";
import ExplorePage from "./pages/ExplorePage";
import RewardsPage from "./pages/RewardsPage";
import SupportPage from "./pages/SupportPage";
//import all paths and gateways
const routes = {
  "/": HomePage,
  "/results": ResultsPage,
  "/journey": JourneyDetailsPage,
  "/booking": BookingPage,
  "/my-bookings": MyBookingsPage,
  "/profile": ProfilePage,
  "/explore": ExplorePage,
  "/rewards": RewardsPage,
  "/support": SupportPage,
};

function Screens() {
  const { path } = useRouter();
  const Page = routes[path] || HomePage;

  return (
    <>
      <Navbar />
      <main>
        <Page />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <BookingProvider>
          <Screens />
        </BookingProvider>
      </RouterProvider>
    </ThemeProvider>
  );
}
