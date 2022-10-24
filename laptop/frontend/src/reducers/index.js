import { combineReducers } from 'redux'

import carousels from './carousels'
import products from './products'
import brands from './brands'
import boximgs from './boximgs'
import auth from './auth'

export default combineReducers({
    products,
    brands,
    carousels,
    boximgs,
    auth
})