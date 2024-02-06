import pizzas from "./data.js";
import CSS from "./Menu.module.css"
const Menu = () => (   
    <ul>
        {pizzas.map((pizza) => (
            <li key={pizza.id} className={CSS.pizza}>
                 <img src={pizza.imageUrl} className={CSS.pizza__image}/>
                 <div className={CSS.pizza__info}>
                  <p className={CSS.pizza__name}>{pizza.name}</p>
                  <p className={CSS.pizza__ingredients}>{pizza.ingredients.map((ing) => <span>{ing}, </span>)}</p>
                  
                {pizza.soldOut == false 
                    ?   <div className={CSS.pizza__actions}>
                        <p className={CSS.pizza__price}>${pizza.unitPrice}</p>
                        <button className={CSS.button}>Add to cart</button>  
                        </div> 
                    :   <div className={CSS.pizza__actions}>
                        <p className={CSS.pizza__price}>Sold out</p> 
                        </div>
                }
                  </div>
            </li>
        )              
        )}
    </ul>
        
)
export default Menu

