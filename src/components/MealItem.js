import '/home/aaron/ita23-challenge/src/components/UI/Button.js'
import React from 'react';
import '/home/aaron/ita23-challenge/src/index.css'

const MealItem = (props) => {
    const handleMealButtonClick = () => {
        alert('Button clicked in MealItem')};

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
                    <button textOnly={false} onClick={handleMealButtonClick} className="button" >Add to Cart</button>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem