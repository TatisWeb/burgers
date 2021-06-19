import React from 'react';
import AddBurgerForm from './AddBurgerForm';

class MenuAdmin extends React.Component {
    
    render(){
        return(
        <>
        <div className="menu-admin">
        <h2> Управление меню </h2>
        </div>
         <button onClick={this.props.loadSampleBurgers}>Загрузить все бургеры</button>
        <AddBurgerForm 
        addBurger={this.props.addBurger}
        />
      
        </>
        )
    }
    }
export default MenuAdmin;