// Inside ShopCategory.jsx
import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import './CSS/ShopCategory.css';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import ItemComponent from '../Components/Item/Item'; // Import ItemComponent

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span>Out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_products.map((item) => {
          if (props.category === item.category) {
            return (
              <ItemComponent
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
