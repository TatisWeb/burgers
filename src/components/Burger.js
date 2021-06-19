import React from 'react';

class Burger extends React.Component {
    

    
    render(){
        
     const {image,name,price,desc,status} = this.props.details;
     const isAvailable = status === 'available'; 
        
        return(
        <li className="menu-burger">
        <div className="image-container">
        <img src={image} alt={name} />
          </div>
        
        <div className="burgers-details">
        <h1 className="burger-name">{name}
        <span className="price">{price}₽</span>
        </h1>
        <p>{desc}</p>
        <button className="button-order"
        disabled={!isAvailable}
        onClick={()=>this.props.addToOrder(this.props.index)}
        >{isAvailable ? 'Заказать' : 'временно нет' }</button>
        
        </div>
        </li>
        
        
   
        )
    }
    }
export default Burger;