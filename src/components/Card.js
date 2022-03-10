import star from "../assets/star.svg";

export function Card({
  img,
  rating,
  reviewCount,
  location,
  title,
  price,
  openSpots,
}) {
  let badgeText = "";

  if (!openSpots) {
    badgeText = "Sold out";
  } else if (location === "Online") {
    badgeText = "Online";
  }

  return (
    <div className="card">
      <div className="card__img-wrapper">
        <img src={img} alt="" className="card__img" />
        {badgeText && <p className="card__badge">{badgeText}</p>}
      </div>
      <div className="card__stats">
        <img src={star} alt="Star" />
        <span className="card__rating">{rating}</span>
        <span className="card__count">({reviewCount}) ·</span>
        <span className="card__state">{location}</span>
      </div>
      <p className="card__title">{title}</p>
      <p className="card__price">
        <strong>From ${price}</strong> / person
      </p>
    </div>
  );
}
