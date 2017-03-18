import React from 'react';
import { connect } from 'react-redux';

import ServiceItem from './ServiceItem';

const mapStateToProps = ({ services }) => ({
  services
});

const Service = ({ category, services }) => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">{category.category_name}</div>
      <div className="panel-body">
        {services.map((service_item, i) => {
          if (service_item.service_category == category.category) {
            return <ServiceItem serviceItem={service_item} key={i} />
          }
        })}
      </div>
    </div>
  )
};

export default connect(mapStateToProps)(Service);