import * as data from '../data';

export const categories = () => data.categories;

export const services = (state = data.services, action) => {
  switch (action.type) {
    case 'INCREMNT_QUANTITY': {
      ++action.payload.service_provide_quantity;
      return state.map(s => s.id !== action.payload.id ? s : action.payload);
    }
    case 'DECREMNT_QUANTITY': {
      action.payload.service_provide_quantity = action.payload.service_provide_quantity > 1 ? --action.payload.service_provide_quantity : 0;
      return state.map(s => s.id !== action.payload.id ? s : action.payload);
    }
    case 'UPDATE_QUANTITY': {
      return state.map(s => s.id !== action.payload.id ? s : action.payload);
    }
    default: return state;
  }
}
