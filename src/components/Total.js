import React from 'react';

export default function Total ({ services }) {
  const total = services
    .map(s => s.service_provide_price * s.service_provide_quantity)
    .reduce((a, b) => a+b);
  return (
    <div className="panel panel-default">
      <div className="panel-body clearfix">
        <div className="pull-left"><big>Total</big></div>
        <div className="pull-right"><strong>${total}</strong></div>
      </div>
    </div>
  )
}
