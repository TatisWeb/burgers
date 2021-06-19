import React from 'react';

class Header extends React.Component {
    
    render(){
        return(
        
   <header className="top">
    <div className="wrap">
     <div className="header-content">
          
      <div className="header-rating">
       <div className="header-rating_tag">рейтинг</div>
       <div className="header-rating_icon">☆☆☆☆☆</div>
      </div>
      
      <div className="header-devider"></div>
      <h1 className="font-effect-fire-animation">{this.props.title}</h1>
       <h3 className="header-rating_tag">
       <span>
       Быстрая доставка бургеров
       <span className="sub-header"></span>
       </span>
       </h3>
       </div>
       </div>
       </header>  
        )
    }
    }
export default Header;