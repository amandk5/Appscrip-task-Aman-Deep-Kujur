import "./ProductCard.css";

export default function ProductCard({ imageSrc, title }) {
  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img
          src={imageSrc || "https://dummyimage.com/600x400/000/fff"}
          alt={title}
          className="product-image"
        />
      </div>

      <div className="product-info">
        <p className="title">{title}</p>
        <p className="price-info">
          <a href="#">Sign in</a> or Create an account to see pricing
        </p>
        <span className="heart">♡</span>
      </div>
    </div>
  );
}
