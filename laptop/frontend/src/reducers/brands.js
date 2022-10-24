// eslint-disable-next-line import/no-anonymous-default-export
export default (brands = [], action) => {
    switch (action.type) {
        case 'DELETE':
            return brands.filter((brand) => brand._id !== action.payload)
        case 'UPDATE':
            return brands.map((brand) => brand._id === action.payload._id ? action.payload : brand);      
        case 'FETCH_ALL':
            return action.payload;            
        case 'CREATE':
            return [...brands, action.payload];            
        default:
            return brands;         
    }
}