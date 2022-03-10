import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import CardsContainer from "./components/CardsContainer";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <CardsContainer />
    </div>
  );
}

export default App;
