import React from 'react';
import { connect } from 'react-redux';
import { incrementQuantity, decrementQuantity, updateQuantity } from '../actions/actions';

const mapStateToProps = props => ({ props });

const mapDispatchToProps = dispatch => ({
  incrementQuantity: obj => dispatch(incrementQuantity(obj)),
  decrementQuantity: obj => dispatch(decrementQuantity(obj)),
  updateQuantity: obj => dispatch(updateQuantity(obj))
});

const ServiceItem = React.createClass({
  render () {
    const { serviceItem, incQ } = this.props;
    const isShow = !!serviceItem.service_provide_quantity;

    return (
      <div className="row">
        <div className="col-md-5">
          <p>
            {serviceItem.service_provide_name}
            {serviceItem.service_provide_addon && <small className="btn-block text-muted">Add-on</small>}
          </p>
        </div>
        <div className="col-md-7">
          <ul className="list-inline text-right">
            <li><big>${serviceItem.service_provide_price}</big></li>
            {isShow && <li><i className="glyphicon glyphicon-remove"></i></li> }
            {isShow && <li><input onBlur={this.handleBlur} onChange={this.handleChange} ref={qua => this.qua = qua} value={serviceItem.service_provide_quantity} type="text" className="form-control text-center" size="3" maxLength="2" /></li> }
            {isShow && <li>
              <big><strong>${serviceItem.service_provide_price * serviceItem.service_provide_quantity}</strong></big>
            </li>}   
            {isShow && <li>
              <button onClick={this.decQ} className="btn btn-danger btn-sm">
                <i className="glyphicon glyphicon-remove"></i>
              </button>
            </li>}
            <li>
              <button onClick={this.incQ} className="btn btn-success btn-sm">
                <i className="glyphicon glyphicon-plus"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  },
  incQ () {
    this.props.incrementQuantity(this.props.serviceItem);
  },
  decQ () {
    this.props.decrementQuantity(this.props.serviceItem);
  },
  handleChange () {
    const { qua } = this;
    const filter = /^[0-9*]{1,2}$/;
    if (!filter.test(parseInt(qua.value))) return;
    let newItem = {...this.props.serviceItem, service_provide_quantity: qua.value};
    this.props.updateQuantity(newItem);
  },
  handleBlur () {
    const { qua } = this;
    let newItem = {...this.props.serviceItem, service_provide_quantity: parseInt(qua.value)};
    this.props.updateQuantity(newItem);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ServiceItem);
