const MealItem = (props) => {
    const europrice = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(props.meal.price);
    return (
        <li className="meal-item">
            <article>
                <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name}/>
                <div>
                    <h3 className="">{props.meal.name}</h3>
                    <p className="meal-item-price">{europrice}</p>
                    <p className="meal-item-description">{props.meal.description}</p>
                </div>
                <p>
                    <button className="button" >Add to Cart</button>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem