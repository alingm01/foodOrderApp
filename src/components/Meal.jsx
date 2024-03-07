import testImage from '../assets/logo.jpg';

const Meal = () => {
  return (
    <div className="meal-item">
       <article>
        <img src={testImage} alt="meal image" />
     
        <h3>Mac && Cheese</h3>
        <div className="meal-item-price">$8.99</div>
        <p className="meal-item-description">Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breaddcrumbs. A classic comfort food.</p>
        <button className="button meal-item-actions">Add to Cart</button>
      </article>
    </div>
  )
}

export default Meal