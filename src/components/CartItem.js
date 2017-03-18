import React from 'react';

const CartItem = ({ service, category }) => {
  return (
    <li className="clearfix">
      <div className="pull-left">
        <strong>{service.service_provide_quantity}</strong>
        {' '}
        {service.service_provide_name}
      </div>
      <div className="pull-right">
        ${service.service_provide_quantity * service.service_provide_price}
      </div>
    </li>
  )
};

export default CartItem;
