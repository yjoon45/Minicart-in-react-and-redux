import React from 'react';
import CartItem from './CartItem';

const CartCat = ({ category, services }) => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">{category.category_name}</div>
      <div className="panel-body">
        <ul className="list-unstyled">
          {services.map((service, i) => {
            if (service.service_category == category.category && service.service_provide_quantity) {
              return <CartItem key={i} category={category} service={service} />
            }
          })}
        </ul>
      </div>
    </div>
  )
};

export default CartCat;
