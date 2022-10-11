import { combineReducers } from 'redux'

import products from './products'
import brands from './brands'

export default combineReducers({
    products,
    brands
})