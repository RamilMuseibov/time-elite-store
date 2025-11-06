import StarIcon from "../icons/StarIcon";

export default function ProductCard(props) {
  return (
    <div className="selected-models-watch-card">
      <img
        className="watch-card-image"
        src="https://v0-watch-store-landing-page.vercel.app/abstract-geometric-shapes.png?height=400&width=400&query=rolex%20submariner%20luxury%20diving%20watch"
      />
      <div className="watch-card-info">
        <p className="watch-name">{props.name}</p>
        <div className="price-evaluation-container">
          <p className="watch-price">{props.price}</p>
          <div className="evaluation-container">
            <div className="star-container">
              <StarIcon className="star-evaluation-image" size="17" />
              <StarIcon className="star-evaluation-image" size="17" />
              <StarIcon className="star-evaluation-image" size="17" />
              <StarIcon className="star-evaluation-image" size="17" />
              <StarIcon className="star-evaluation-image" size="17" />
            </div>
          </div>
        </div>
      </div>
      <div className="details-btn-container">
        <button className="details-btn">Подробнее</button>
      </div>
    </div>
  );
}
