import React from 'react';
import { connect } from 'react-redux';

import CartCat from './CartCat';
import Total from './Total';

const mapStateToProps = ({ categories, services }) => ({
  categories,
  services
});

const Cart = ({ categories, services }) => {
  const selectedServices = services.filter(s => s.service_provide_quantity);
  if (selectedServices.length) {
    return (
      <div className="col-sm-4">
        {categories.map((category, i) => {
          if (selectedServices.filter(c => c.service_category == category.category).length) {
            return <CartCat key={i} category={category} services={services} />
          }
        })}
        <Total services={selectedServices} />
      </div>
    );
  } else {
    return <div className="col-sm-4">Your cart is empty</div>;
  }
};

export default connect(mapStateToProps)(Cart);
