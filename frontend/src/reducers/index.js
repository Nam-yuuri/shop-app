import { combineReducers } from 'redux'

import carousels from './carousels'
import products from './products'
import brands from './brands'
import boximgs from './boximgs'

export default combineReducers({
    products,
    brands,
    carousels,
    boximgs,
})