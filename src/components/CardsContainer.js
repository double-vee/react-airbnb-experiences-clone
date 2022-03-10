import { Card } from "./Card";
import data from "../data.js";

export default function CardsContainer() {
  const cards = data.map((card) => <Card key={card.id} {...card} />);

  return <section className="cards-container">{cards}</section>;
}
