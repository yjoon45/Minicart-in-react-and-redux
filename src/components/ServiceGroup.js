import React from 'react';
import { connect } from 'react-redux';

import Service from './Service';

const mapStateToProps = ({ categories }) => ({
  categories
});

const ServiceGroup = ({ categories }) => {
  return (
    <div className="col-sm-8">
      {categories.map((category, i) => <Service key={i} category={category} />)}
    </div>
  );
};

export default connect(mapStateToProps)(ServiceGroup);
