import { Card } from "./Card";
import data from "../data.js";

export default function CardsContainer() {
  const cards = data.map((card) => (
    <Card
      key={card.id}
      img={card.coverImg}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      location={card.location}
      title={card.title}
      price={card.price}
      openSpots={card.openSpots}
    />
  ));

  return <section className="cards-container">{cards}</section>;
}
