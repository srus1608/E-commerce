import React, { createContext, useState } from "react";
import allProducts from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < allProducts.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }

  const removeCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    console.log(cartItems);
  }

  const getTotalCartAmount =() => {
    let totalAmount = 0;
    for(const item in cartItems)
    {
      if(cartItems[item]>0)
      {
        let iteminfo = allProducts.find((product)=>product.id===Number(item))
        totalAmount += iteminfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  }

  const getTotalCartItems = ()=>{
    let totalItem=0;
    for(const item in cartItems)
    {
      if(cartItems[item]>0)
      {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }

  const contextValue = {getTotalCartAmount, getTotalCartItems, all_products: allProducts, cartItems, addToCart, removeCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
