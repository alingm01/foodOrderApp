const Meals = ({ meals }) => {
  return (
    <section id="meals">
          {meals.map((meal) => {
            return (
              <div >
                <div className="meal-item">
                  <img src={`http://localhost:3000/${meal.image}`} alt={`${meal.name} picture`}  />
                  <h3>{meal.name}</h3>
                  <div className="meal-item-price">{meal.price}</div>
                  <article className="meal-item-description">{meal.description}</article>
                  <button className="button meal-item-actions">Add to Cart</button>
                </div>
              </div>
            )
          })}   
    </section>
  )
}

export default Meals

// <img src={`http://localhost:3000/${meal.image}`} alt={`${meal.name} picture`}  />
// <article>
//   <h3>{meal.name}</h3>
//   <div className="meal-item-price">{meal.price}</div>
//   <p className="meal-item-description">{meal.description}</p>
//   <button className="button meal-item-actions">Add to Cart</button>
// </article>
// </li>