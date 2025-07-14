
import "../styles/Card.css"
import "../styles/Button.css"

const CategoryCard = ({ title, subtitle }) => {
  return (
    <div className="category-card">
  
      <div className="category-content">
        <h4 className="category-title">{title}</h4>
        <p className="category-subtitle">{subtitle}</p>
        <button className="card-btn">Explore Now</button>
      </div>
    </div>
  );
};

export default CategoryCard;