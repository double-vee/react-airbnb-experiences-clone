import photo from "../assets/image_12.png";
import star from "../assets/star.svg";

export function Card() {
  return (
    <div className="card">
      <div className="card__img-wrapper">
        <img src={photo} alt="" className="card__img" />
        <p className="card__badge">Sold out</p>
      </div>
      <div className="card__stats">
        <img src={star} alt="Star" />
        <span className="card__rating">5.0</span>
        <span className="card__count">(6) ·</span>
        <span className="card__state">USA</span>
      </div>
      <p className="card__title">Life lessons with Katie Zaferes</p>
      <p className="card__price">
        <strong>From $136</strong> / person
      </p>
    </div>
  );
}
