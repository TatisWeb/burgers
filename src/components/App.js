import React from 'react';
import Header from './header';
import MenuAdmin from './menuadmin';
import Order from './order';
import Burger from './Burger';
import sampleBurgers from '../sample-burgers';
import base from '../base';
import firebase from 'firebase/app';

class App extends React.Component {
    
    state = {
        burgers: {},
        order: {}
    };
    
    componentDidMount(){
      const{ params } = this.props.match;
     try {
      const localStorageRef = localStorage.getItem(params.restaurantId);
      
     if (localStorageRef) { 
     this.setState({ order: JSON.parse(localStorageRef) }); }
     }
     catch(e) {
      this.ref = base.syncState(`${params.restaurantId}/burgers`,{
          
      context: this,
      state: 'burgers',
      
        });
        }
        }
      componentDidUpdate() {
      try{
       const { params } = this.props.match;
       localStorage.setItem(params.restaurantId, JSON.stringify(this.state.order));
       }catch{}
       
       }
   
   
      componentWillUnmount() {
          try{
       base.removeBinding(this.ref);
       }
       catch{}
       
       }
    
    addBurger = burger => {
        
        // Создаем копию обьекта state
        const  burgers = { ...this.state.burgers };
       
        //Добавить новую бургер в переменную burger
        
        burgers[`burger${Date.now()}`] = burger;
        
        //записать новый обьект в state
        
        this.setState({burgers});
            
    };
    
    loadSampleBurgers = () => {
        this.setState({burgers: sampleBurgers});
          
    }
    
    addToOrder = (key) => {
    //делаем копию стейт
        const order = {...this.state.order}
    //берём переменную ордер и обьекте по ключу добавляем 1
    order[key] = order[key] +1 || 1;
    // обновляем стейт
     this.setState({order});
    
    }
    
    render() {
        return(
        
        <div className="burger-paraduse">
        <div className="menu">
        
        <Header title="Very Hot Burger"/>
              <ul className="burgers">
        {Object.keys(this.state.burgers).map(key =>{
            return (
         <Burger 
          key={key}
          index={key}
          addToOrder={this.addToOrder}
          details={this.state.burgers[key]}
         />
         )
         })}
         
         </ul>
        
        
        
        </div>
        
        <Order
        burgers={this.state.burgers}
        order={this.state.order}
         />
        <MenuAdmin addBurger={this.addBurger}
        loadSampleBurgers={this.loadSampleBurgers}
        />
       
        </div>
        
        
        )
    }
    }
export default App;