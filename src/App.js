import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Card } from "./components/Card";
import photo12 from "./assets/image_12.png";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Card
        img={photo12}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={135}
      />
    </div>
  );
}

export default App;
