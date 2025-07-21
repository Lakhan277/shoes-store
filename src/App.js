import React, {  useState } from 'react';
import Navbar from './Components/Navbar';
import Designer from './Assets/Designer.jpeg';
import Designer2 from './Assets/Designer2.jpeg'
import Designer3 from './Assets/Designer3.jpeg'
import Designer4 from './Assets/Designer4.jpeg'
import Designer5 from './Assets/Designer5.jpeg'
import './App.css';
function App(){
  const [shoes] = useState([
    {id:1, name:'Nike', price:100, image: Designer},
 { id: 2, name: 'Pooma', price: 145, image: Designer2},
 { id: 3, name: 'sport', price: 200, image: Designer3 },
 { id: 4, name: 'Running shoes', price: 300, image: Designer4},
 { id: 5, name: 'Casual shoes', price: 400, image: Designer5},

  ]);
  const [cart, setCart]=useState([]);
  
       // Function to update State

  const addToCart = (shoeToAdd)=>{
    const existingItem = cart.find (item => item.id === shoeToAdd.id);
    if(existingItem){
      setCart(cart.map(item =>
        item.id === shoeToAdd.id ?{...item, quantity: item.quantity + 1}: item
      ))
    }else{
      setCart([...cart,{...shoeToAdd,quantity: 1}])
    }
  };
 
   // 
  const increaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    const item = cart.find(item => item.id === id);
    if (item.quantity === 1) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      setCart(cart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      ));
    }
  };

  //calculation 

  const  cartTotal = cart.reduce((total , item )=> total + (item.price * item.quantity),0);

  // UI for User
  return(
    <>
    <Navbar/>
    <div className="app-container">
      <div className="products-section"> 
        <h1 className="store-title">Trending Shoes</h1>
        <div className="shoes-grid"> 
          {shoes.map(shoe => (
            <div key={shoe.id} className="shoe-card">
              <img src={shoe.image} alt={shoe.name} className="shoe-image"/>  

              <h3 className="shoe-name"> {shoe.name}</h3>
              <p className="shoe-price">${shoe.price.toFixed(2)}</p>
              <button onClick ={()=> addToCart(shoe)} className="add-btn">
                Add to Cart
              </button>
            </div>
          ))} 

        </div>
        </div>
        
        <div className="cart-section">
      <h2 className="cart-title"> Your Item is Here</h2>
      {cart.length === 0 ?(
        
        <p className="cart-empty-message"> Your Cart is empty please click add to cart button</p>
        
      ) : (
        <>
        {cart.map(item =>(
          <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />

            <span className="cart-item-name">{item.name}</span>
           
            {/* 🔽 Quantity Controls */}
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)} className="qty-btn1">−</button>
                    <span className="cart-item-quantity">{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)} className="qty-btn">+</button>
                  </div>

                  <span className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
        
        <div className="cart-total">
          <h3> Total:${cartTotal.toFixed(2)}</h3>
        </div>
        </>
      
      )}
     </div>
    </div>
    
    </>
  );

}
export default App;