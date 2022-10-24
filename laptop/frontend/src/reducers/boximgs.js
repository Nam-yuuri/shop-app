// eslint-disable-next-line import/no-anonymous-default-export
export default (boximgs = [], action) => {
    switch (action.type) {
        case 'DELETE':
            return boximgs.filter((boximg) => boximg._id !== action.payload)
        case 'UPDATE':
            return boximgs.map((boximg) => boximg._id === action.payload._id ? action.payload : boximg);      
        case 'FETCH_ALL':
            return action.payload;            
        case 'CREATE':
            return [...boximgs, action.payload];            
        default:
            return boximgs;         
    }
}